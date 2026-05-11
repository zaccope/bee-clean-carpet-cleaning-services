'use client'

import { useEffect, useState } from 'react'
import { Phone, ArrowUpRight } from '@phosphor-icons/react'
import { trackEvent } from './Analytics'

export default function StickyCall() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="tel:+447885386820"
      onClick={() => trackEvent('tel_link_click', { location: 'sticky' })}
      aria-label="Call Bee Clean on 07885 386 820"
      className={`fixed inset-x-3 bottom-3 z-40 flex items-center justify-between gap-3 rounded-full border border-ink/15 bg-honey pl-4 pr-2 py-2 text-ink shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-500 md:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <span className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-honey">
          <Phone size={16} weight="fill" />
        </span>
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-[0.22em] text-ink/70">
            Tap to call
          </span>
          <span className="block font-display text-[15px] font-semibold">
            07885 386 820
          </span>
        </span>
      </span>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-honey">
        <ArrowUpRight size={14} weight="bold" />
      </span>
    </a>
  )
}
