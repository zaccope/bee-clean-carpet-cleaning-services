'use client'

import { useEffect, useRef, useState, FormEvent } from 'react'
import { ChatTeardropDots, X, PaperPlaneTilt } from '@phosphor-icons/react'
import { trackEvent } from './Analytics'

type Status = 'idle' | 'sending' | 'ok' | 'err'

export default function ChatBubble() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [pulse, setPulse] = useState(true)
  const nameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 6500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (open) {
      setPulse(false)
      setTimeout(() => nameRef.current?.focus(), 80)
    }
  }, [open])

  function toggle() {
    const next = !open
    setOpen(next)
    if (next) trackEvent('chat_open', { location: 'bubble' })
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') || ''),
      phone: String(data.get('phone') || ''),
      message: String(data.get('message') || ''),
      source: 'chat_bubble',
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || json?.ok === false) {
        setStatus('err')
        return
      }
      setStatus('ok')
      trackEvent('chat_submit', { location: 'bubble' })
      form.reset()
    } catch {
      setStatus('err')
    }
  }

  return (
    <div className="fixed bottom-20 right-4 z-50 md:bottom-6 md:right-6">
      {open && (
        <div
          role="dialog"
          aria-label="Message Bee Clean"
          className="mb-3 w-[min(340px,calc(100vw-2rem))] overflow-hidden rounded-[1.25rem] border border-ink/10 bg-cream shadow-[0_20px_60px_rgba(0,0,0,0.18)] animate-bubble-in"
        >
          <header className="flex items-center justify-between gap-2 border-b border-ink/10 bg-ink px-4 py-3 text-cream">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-honey text-ink">
                <ChatTeardropDots size={16} weight="fill" />
              </span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-cream/50">
                  Bee Clean
                </div>
                <div className="text-sm font-medium">Quick message</div>
              </div>
            </div>
            <button
              type="button"
              onClick={toggle}
              aria-label="Close"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
            >
              <X size={14} weight="bold" />
            </button>
          </header>

          {status === 'ok' ? (
            <div className="p-5 text-sm text-ink/80">
              Cheers &mdash; we&rsquo;ll be back to you today.
              <button
                type="button"
                onClick={() => {
                  setStatus('idle')
                  setOpen(false)
                }}
                className="mt-5 inline-flex rounded-full border border-ink/15 px-4 py-1.5 text-xs font-medium text-ink hover:bg-ink hover:text-cream"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-3 p-4">
              <input
                ref={nameRef}
                name="name"
                required
                placeholder="Name"
                autoComplete="name"
                className="w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm outline-none focus:border-ink"
              />
              <input
                name="phone"
                type="tel"
                required
                placeholder="Phone"
                autoComplete="tel"
                className="w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm outline-none focus:border-ink"
              />
              <textarea
                name="message"
                rows={3}
                placeholder="Rooms / rough size of job"
                className="w-full resize-y rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm outline-none focus:border-ink"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-cream transition-transform active:scale-[0.98] disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send'}
                <PaperPlaneTilt size={14} weight="fill" className="text-honey" />
              </button>
              {status === 'err' && (
                <p className="text-xs text-red-600">
                  Couldn&rsquo;t send. Please call 07700 900 123.
                </p>
              )}
            </form>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={toggle}
        aria-label={open ? 'Close message' : 'Open message'}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-ink text-cream shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-transform active:scale-[0.96]"
      >
        {open ? (
          <X size={20} weight="bold" />
        ) : (
          <ChatTeardropDots size={22} weight="fill" className="text-honey" />
        )}
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full ring-2 ring-honey/60" />
            {pulse && (
              <span className="absolute inset-0 rounded-full ring-2 ring-honey animate-ping" />
            )}
          </>
        )}
      </button>
    </div>
  )
}
