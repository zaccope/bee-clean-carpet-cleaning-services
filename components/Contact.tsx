'use client'

import { useState, FormEvent } from 'react'
import { Phone, ArrowUpRight, Clock } from '@phosphor-icons/react'
import { trackEvent } from './Analytics'

type Status = 'idle' | 'sending' | 'ok' | 'err'

const PHONE_TEL = '+447700900123'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError(null)
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') || ''),
      phone: String(data.get('phone') || ''),
      message: String(data.get('message') || ''),
      source: 'contact',
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
        setError(json?.error || "Couldn't send. Please call 07700 900 123.")
        return
      }
      setStatus('ok')
      trackEvent('form_submit', { form: 'contact' })
      form.reset()
    } catch {
      setStatus('err')
      setError('Network error. Please call 07700 900 123.')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-ink/10 bg-ink text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-honey/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-honey/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-honey">
              Free quote
            </div>
            <h2 className="mt-3 font-display text-4xl font-medium leading-[1.02] tracking-tightest md:text-[4rem]">
              Tell us the rooms.<br />Quote back today.
            </h2>

            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => trackEvent('tel_link_click', { location: 'contact' })}
              className="group mt-10 flex items-baseline gap-4 text-cream transition-colors hover:text-honey"
            >
              <Phone
                size={26}
                weight="fill"
                className="shrink-0 translate-y-[0.4rem] text-honey"
              />
              <span className="font-display text-4xl font-medium tracking-tight md:text-5xl">
                07700 900 123
              </span>
              <ArrowUpRight
                size={22}
                weight="bold"
                className="ml-1 translate-y-1 text-cream/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-honey"
              />
            </a>

            <div className="mt-10 grid grid-cols-1 gap-5 border-t border-cream/10 pt-8 text-sm md:grid-cols-2">
              <div className="flex items-start gap-3">
                <Clock size={16} weight="regular" className="mt-1 text-honey" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-cream/50">
                    Hours
                  </div>
                  <div className="mt-1 text-cream">Mon&ndash;Sat, 8am&ndash;6pm</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-honey animate-tick" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-cream/50">
                    Reply time
                  </div>
                  <div className="mt-1 text-cream">Same day, every day</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-[1.75rem] border border-cream/10 bg-cream/5 p-6 md:p-10"
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="c-name" className="text-[12px] uppercase tracking-[0.22em] text-cream/60">
                    Name
                  </label>
                  <input
                    id="c-name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="rounded-xl border border-cream/15 bg-transparent px-4 py-3 text-[15px] text-cream outline-none transition-colors placeholder:text-cream/30 focus:border-honey"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="c-phone" className="text-[12px] uppercase tracking-[0.22em] text-cream/60">
                    Phone
                  </label>
                  <input
                    id="c-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="07…"
                    className="rounded-xl border border-cream/15 bg-transparent px-4 py-3 text-[15px] text-cream outline-none transition-colors placeholder:text-cream/30 focus:border-honey"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <label htmlFor="c-msg" className="text-[12px] uppercase tracking-[0.22em] text-cream/60">
                  Rooms / fabric <span className="text-cream/40 normal-case tracking-normal">(optional)</span>
                </label>
                <textarea
                  id="c-msg"
                  name="message"
                  rows={4}
                  placeholder="Rough idea — e.g. lounge + stairs + 1 sofa, pet stains in lounge"
                  className="resize-y rounded-xl border border-cream/15 bg-transparent px-4 py-3 text-[15px] text-cream outline-none transition-colors placeholder:text-cream/30 focus:border-honey"
                />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-cream/10 pt-6 text-[11px] uppercase tracking-[0.22em] text-cream/55">
                <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-honey" /> Fully insured</span>
                <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-honey" /> Pet &amp; kid safe</span>
                <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-honey" /> No-fuss quotes</span>
              </div>

              <div className="mt-6 flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-[12px] text-cream/50">
                  Same-day reply, Mon&ndash;Sat. No marketing, ever.
                </p>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-honey px-6 py-3 text-[15px] font-medium text-ink transition-transform active:scale-[0.98] disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Get my free quote'}
                  <ArrowUpRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-[1px]" />
                </button>
              </div>

              {status === 'ok' && (
                <p className="mt-6 rounded-xl border border-honey/30 bg-honey/10 px-4 py-3 text-sm text-honey-soft">
                  Cheers. We&rsquo;ll be back to you today with a quote and a slot.
                </p>
              )}
              {status === 'err' && (
                <p className="mt-6 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
