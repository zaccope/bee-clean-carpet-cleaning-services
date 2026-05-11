'use client'

import Image from 'next/image'
import { Phone, ArrowRight, Star, Drop, ShieldCheck } from '@phosphor-icons/react'
import { trackEvent } from './Analytics'

const PHONE_TEL = '+447885386820'

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
              Staffs &middot; Cheshire &middot; Derbyshire &middot; Shropshire
            </div>

            <h1 className="reveal reveal-1 mt-6 font-display text-[clamp(2.25rem,4.8vw,4.25rem)] font-semibold leading-[1.02] tracking-tightest text-ink">
              Stains gone.
              <br />
              <span className="text-honey-deep">Carpets like new.</span>
            </h1>

            <p className="reveal reveal-2 mt-5 max-w-[58ch] text-[16px] leading-relaxed text-ink/70 md:text-[1.075rem]">
              Carpet, upholstery and hard-floor cleaning across Staffordshire,
              Cheshire, Derbyshire and Shropshire. Wool Safe approved kit,
              over 500 five-star Facebook reviews, dry in hours &mdash; with a
              fixed price quoted before we start.
            </p>

            <div className="reveal reveal-3 mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href={`tel:${PHONE_TEL}`}
                onClick={() => trackEvent('tel_link_click', { location: 'hero' })}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium text-cream transition-transform active:scale-[0.98]"
              >
                <Phone size={18} weight="fill" className="text-honey" />
                Call 07885 386 820
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
                <span className="text-ink/80">500+ Facebook reviews</span>
              </span>
              <span className="flex items-center gap-1.5 text-ink/70">
                <ShieldCheck size={15} weight="regular" className="text-honey-deep" />
                Wool Safe approved
              </span>
              <span className="flex items-center gap-1.5 text-ink/70">
                <Drop size={15} weight="regular" className="text-honey-deep" />
                Dry in 2&ndash;4 hours
              </span>
            </div>
          </div>

          {/* Right — real photo */}
          <div className="reveal reveal-2 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-honey/10 ring-1 ring-ink/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
              <Image
                src="/images/8.jpg"
                alt="Bee Clean — fresh extraction lines on a cream carpet, mid-clean"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />

              {/* Bottom caption pill */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-ink/65 px-4 py-3 text-cream backdrop-blur-md">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-cream/60">
                    Today
                  </div>
                  <div className="text-sm font-medium">
                    Hallway extraction &mdash; cream wool
                  </div>
                </div>
                <span className="rounded-full bg-honey px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink">
                  In progress
                </span>
              </div>

              {/* Top-left corner badge */}
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink/65 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-cream backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-honey" />
                Wool Safe approved
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
