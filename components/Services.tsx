import Image from 'next/image'
import {
  Drop,
  Couch,
  SquaresFour,
  Buildings,
  Sparkle,
  House,
} from '@phosphor-icons/react/dist/ssr'

const FEATURED = {
  icon: Drop,
  title: 'Carpet deep cleaning &mdash; Wool Safe approved',
  lede: 'The proper way to clean a carpet, not a surface dust-off.',
  body:
    'High-pressure hot water injected into the pile, then vacuumed straight back out under suction. Wool Safe approved products lift soil, traffic lanes, grit and old shampoo residue your hoover can&rsquo;t touch. Walk-on-dry in two to four hours, no soaked underlay.',
  points: ['Wool Safe products', 'Stairs &amp; landings included', 'Dry in 2&ndash;4 hours'],
}

const OTHER = [
  {
    icon: Couch,
    title: 'Upholstery &amp; sofa cleaning',
    body:
      'Three-seaters, corner suites, recliners, dining chairs and headboards. We test the fabric first, then deep-clean with the right tool &mdash; wet extraction for cottons, low-moisture for delicates.',
  },
  {
    icon: SquaresFour,
    title: 'Hard floor cleaning',
    body:
      'LVT, Karndean, vinyl, ceramic tile, stone and safety flooring brought back to factory-fresh. We deep-clean the grout lines too &mdash; the bit a mop can never reach.',
  },
  {
    icon: Sparkle,
    title: 'Stain &amp; odour removal',
    body:
      'Red wine, coffee, ink, pet accidents, sick &mdash; we&rsquo;ve seen the lot. Targeted enzyme and oxidising treatments to lift the stain and neutralise the smell at source.',
  },
  {
    icon: House,
    title: 'End / start of tenancy',
    body:
      'Dated, signed receipt suitable for landlords, letting agents and deposit disputes. We work around the rest of the move-out clean and around your inventory check.',
  },
  {
    icon: Buildings,
    title: 'Commercial &amp; fixed seating',
    body:
      'Offices, dealerships, pubs, restaurants, salons and theatres. Fixed seating, chairs and stools cleaned in place, plus sealed wood and micro bonnet maintenance cleans.',
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
              Carpets, sofas, hard floors. All in one visit.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-ink/70">
            Residential and commercial. Wool Safe approved, fully insured,
            fixed price before we start &mdash; no surprises on the invoice.
          </p>
        </div>

        {/* Featured card — carpet cleaning */}
        <article className="mt-12 grid grid-cols-1 overflow-hidden rounded-[1.75rem] border border-ink/10 md:grid-cols-12">
          <div className="relative order-2 h-72 bg-honey/10 md:order-1 md:col-span-5 md:h-auto">
            <Image
              src="/images/1.jpg"
              alt="Bee Clean — deep-cleaning a patterned stair carpet with the extraction wand"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/45 via-ink/0 to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-ink/65 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-cream backdrop-blur-sm">
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
                <h3
                  className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-[2.4rem]"
                  dangerouslySetInnerHTML={{ __html: FEATURED.title }}
                />
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
