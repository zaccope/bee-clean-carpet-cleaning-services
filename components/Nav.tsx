'use client'

import { useEffect, useState } from 'react'
import { Phone, ArrowUpRight, List, X } from '@phosphor-icons/react'
import { trackEvent } from './Analytics'
import Logo from './Logo'

const PHONE_TEL = '+447700900123'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'How it works' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Free quote' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [open])

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-4 md:px-10">
        <a href="#top" aria-label="Bee Clean — home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-ink/70 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover-underline">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            onClick={() => trackEvent('tel_link_click', { location: 'nav' })}
            aria-label="Call Bee Clean"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink md:hidden"
          >
            <Phone size={16} weight="fill" />
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            onClick={() => trackEvent('tel_link_click', { location: 'nav_desktop' })}
            className="hidden items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink md:inline-flex"
          >
            <Phone size={14} weight="fill" className="text-honey-deep" />
            07700 900 123
          </a>
          <a
            href="#contact"
            onClick={() => trackEvent('cta_click', { location: 'nav' })}
            className="group hidden items-center gap-2 rounded-full bg-ink py-2 pl-4 pr-2 text-sm font-medium text-cream transition-transform active:scale-[0.98] md:inline-flex"
          >
            Free quote
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-honey text-ink">
              <ArrowUpRight size={14} weight="bold" />
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink md:hidden"
          >
            {open ? <X size={16} weight="bold" /> : <List size={16} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile menu — SOLID ink background, never transparent */}
      <div
        className={`md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`fixed inset-x-0 top-[65px] z-40 origin-top transition duration-300 ${
            open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}
        >
          <div className="border-b border-honey/40 bg-ink text-cream shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]">
            <nav className="mx-auto flex max-w-[1280px] flex-col px-5 py-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-cream/10 py-4 font-display text-lg text-cream transition-colors hover:text-honey"
                >
                  {l.label}
                  <ArrowUpRight size={16} weight="bold" className="text-honey" />
                </a>
              ))}
              <a
                href={`tel:${PHONE_TEL}`}
                onClick={() => {
                  trackEvent('tel_link_click', { location: 'mobile_menu' })
                  setOpen(false)
                }}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-honey px-6 py-3 font-medium text-ink active:scale-[0.98]"
              >
                <Phone size={16} weight="fill" />
                Call 07700 900 123
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
