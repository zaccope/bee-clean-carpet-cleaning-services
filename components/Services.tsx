import {
  Drop,
  Couch,
  Dog,
  Buildings,
  Sparkle,
  House,
} from '@phosphor-icons/react/dist/ssr'

const FEATURED = {
  icon: Drop,
  title: 'Hot-water extraction carpet clean',
  lede: 'The proper way to clean a carpet — not a surface dust-off.',
  body:
    'High-pressure hot water injected into the pile, then vacuumed straight back out under suction. Lifts soil, traffic lanes, grit and old shampoo residue your hoover can’t touch. Walk-on-dry in two to four hours, no soaked underlay.',
  points: ['Stairs &amp; landings included', 'Heavy-traffic lanes lifted', 'Walk-on-dry in 2&ndash;4 hours'],
}

const OTHER = [
  {
    icon: Couch,
    title: 'Sofa &amp; upholstery clean',
    body:
      'Three-seaters, corner suites, dining chairs and headboards. We test the fabric first, then deep-clean with the right tool — wet extraction for cottons, low-moisture for delicates.',
  },
  {
    icon: Dog,
    title: 'Pet stain &amp; odour removal',
    body:
      'Enzyme pre-treat that breaks urine crystals down at the source, then full hot-water extraction. Most pet smells gone in one visit, even if you’ve had a go yourself first.',
  },
  {
    icon: Sparkle,
    title: 'Rug cleaning',
    body:
      'Wool, synthetic, jute and shaggy rugs cleaned in-home or collected. Fringes restored, colours back to original — without the harsh chemicals that shorten a rug’s life.',
  },
  {
    icon: House,
    title: 'End-of-tenancy carpet clean',
    body:
      'Dated, signed receipt suitable for letting agents and deposit disputes. We work around the rest of the move-out clean and around your inventory check.',
  },
  {
    icon: Buildings,
    title: 'Commercial &amp; office',
    body:
      'Offices, pubs, restaurants and salons. Evenings and weekends, no disruption to your trade, scheduled around the working day. Quarterly maintenance contracts too.',
  },
]

export default function Services() {
  return (
    <section id="services" className="border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-10 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink/55">
              Services
            </div>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-[1.02] tracking-tightest text-ink md:text-6xl">
              Anything with a pile, sorted.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-ink/70">
            From a single rug to a full house and stairs. We quote it
            properly, work cleanly, and leave it dry &mdash; not soaked.
          </p>
        </div>

        {/* Featured card — hot-water extraction is the bread and butter */}
        <article className="mt-12 grid grid-cols-1 overflow-hidden rounded-[1.75rem] border border-ink/10 md:grid-cols-12">
          <div className="relative order-2 h-72 bg-honey md:order-1 md:col-span-5 md:h-auto">
            {/* Honeycomb illustration panel */}
            <svg
              aria-hidden
              className="absolute inset-0 h-full w-full opacity-20"
              viewBox="0 0 200 200"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern id="hex2" width="34" height="38" patternUnits="userSpaceOnUse">
                  <polygon
                    points="17,2 32,11 32,28 17,37 2,28 2,11"
                    fill="none"
                    stroke="#1A1A1A"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hex2)" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center p-10">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-cream shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)]">
                <FEATURED.icon size={56} weight="regular" className="text-honey-shadow" />
              </div>
            </div>
            <div className="absolute bottom-5 left-5 rounded-full border border-ink/10 bg-ink/85 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-cream backdrop-blur-sm">
              Most booked
            </div>
          </div>

          <div className="order-1 md:order-2 md:col-span-7">
            <div className="flex h-full flex-col justify-between gap-8 p-8 md:p-12">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-honey/20 text-honey-shadow ring-1 ring-honey/40">
                    <FEATURED.icon size={22} weight="regular" />
                  </span>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-ink/55">
                    Feature
                  </div>
                </div>
                <h3 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-[2.4rem]">
                  {FEATURED.title}
                </h3>
                <p className="mt-3 text-[15px] text-ink/65">{FEATURED.lede}</p>
                <p
                  className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/80"
                  dangerouslySetInnerHTML={{ __html: FEATURED.body }}
                />
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {FEATURED.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-[13px] text-ink/70"
                  >
                    <span className="h-1 w-1 rounded-full bg-honey-deep" />
                    <span dangerouslySetInnerHTML={{ __html: p }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        {/* Other services */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-6">
          {OTHER.map((s, i) => (
            <article
              key={s.title}
              className={`group rounded-[1.5rem] border border-ink/10 bg-cream p-7 transition-colors hover:bg-white ${
                i < 2 ? 'md:col-span-3' : 'md:col-span-2'
              }`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-ink ring-1 ring-ink/10 transition-colors group-hover:bg-honey/15 group-hover:text-honey-shadow group-hover:ring-honey/40">
                <s.icon size={22} weight="regular" />
              </span>
              <h3
                className="mt-8 font-display text-xl font-semibold tracking-tight text-ink"
                dangerouslySetInnerHTML={{ __html: s.title }}
              />
              <p
                className="mt-3 text-[14.5px] leading-relaxed text-ink/70"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
