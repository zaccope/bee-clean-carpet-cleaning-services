'use client'

import { Phone, ArrowRight, Star, Drop, Sparkle } from '@phosphor-icons/react'
import { trackEvent } from './Analytics'

const PHONE_TEL = '+447700900123'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-ink/10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[460px] w-[460px] rounded-full bg-honey/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[340px] w-[340px] rounded-full bg-honey-soft/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 pb-16 pt-10 md:px-10 md:pb-20 md:pt-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left — copy */}
          <div className="lg:col-span-7">
            <div className="reveal inline-flex items-center gap-3 rounded-full border border-ink/10 bg-cream/80 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-honey" />
              Carpets &middot; Rugs &middot; Upholstery
            </div>

            <h1 className="reveal reveal-1 mt-6 font-display text-[clamp(2.25rem,4.8vw,4.25rem)] font-semibold leading-[1.02] tracking-tightest text-ink">
              Stains gone.
              <br />
              <span className="text-honey-deep">Carpets like new.</span>
            </h1>

            <p className="reveal reveal-2 mt-5 max-w-[58ch] text-[16px] leading-relaxed text-ink/70 md:text-[1.075rem]">
              Hot-water extraction that lifts ground-in dirt, pet accidents and
              tenancy-deposit stains out of carpets, rugs and sofas. Dry in
              hours, not days &mdash; with a fixed price quoted before we start.
            </p>

            <div className="reveal reveal-3 mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href={`tel:${PHONE_TEL}`}
                onClick={() => trackEvent('tel_link_click', { location: 'hero' })}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium text-cream transition-transform active:scale-[0.98]"
              >
                <Phone size={18} weight="fill" className="text-honey" />
                Call 07700 900 123
              </a>
              <a
                href="#contact"
                onClick={() => trackEvent('cta_click', { location: 'hero' })}
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-ink/15 bg-cream px-6 py-3.5 text-[15px] font-medium text-ink transition-all hover:border-ink/40 hover:bg-white active:scale-[0.98]"
              >
                Get a free quote
                <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Trust micro-row */}
            <div className="reveal reveal-4 mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink/65">
              <span className="flex items-center gap-1.5">
                <span className="flex items-center gap-0.5 text-honey-deep">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} weight="fill" />
                  ))}
                </span>
                <span className="text-ink/80">38 happy customers</span>
              </span>
              <span className="flex items-center gap-1.5 text-ink/70">
                <Drop size={15} weight="regular" className="text-honey-deep" />
                Dry in 2&ndash;4 hours
              </span>
              <span className="flex items-center gap-1.5 text-ink/70">
                <Sparkle size={15} weight="regular" className="text-honey-deep" />
                Pet &amp; kid safe
              </span>
            </div>
          </div>

          {/* Right — visual showcase card */}
          <div className="reveal reveal-2 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-honey ring-1 ring-ink/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
              {/* Honeycomb background pattern */}
              <svg
                aria-hidden
                className="absolute inset-0 h-full w-full opacity-25"
                viewBox="0 0 200 250"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <pattern id="hex" width="28" height="32" patternUnits="userSpaceOnUse">
                    <polygon
                      points="14,2 26,9 26,23 14,30 2,23 2,9"
                      fill="none"
                      stroke="#1A1A1A"
                      strokeWidth="0.8"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hex)" />
              </svg>

              {/* Big floating bee mark — uses logo */}
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <div className="relative h-full w-full max-w-[280px]">
                  <div className="absolute inset-0 rounded-[1.5rem] bg-cream/95 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)]">
                    <div className="flex h-full flex-col items-center justify-center gap-5 p-6 text-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-honey ring-4 ring-cream">
                        <img
                          src="/images/LOGO.jpg"
                          alt="Bee Clean logo"
                          className="h-20 w-20 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-display text-2xl font-semibold tracking-tight text-ink">
                          Bee Clean
                        </div>
                        <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-ink/55">
                          Carpet Cleaning Services
                        </div>
                      </div>
                      <div className="rounded-full bg-ink px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-honey">
                        Same-week slots
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom caption pill */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-ink/10 bg-ink/85 px-4 py-3 text-cream backdrop-blur-md">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-cream/60">
                    Today
                  </div>
                  <div className="text-sm font-medium">
                    Lounge &amp; stairs &mdash; 2 hr clean
                  </div>
                </div>
                <span className="rounded-full bg-honey px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink">
                  Booked
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
