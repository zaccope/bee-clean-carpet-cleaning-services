import { Phone, Clock } from '@phosphor-icons/react/dist/ssr'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-6">
          <div className="font-display text-[15px] font-semibold uppercase tracking-[0.22em] text-ink">
            Bee <span className="text-honey-deep">Clean</span>
          </div>
          <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-ink/65">
            Carpet, rug and upholstery cleaning done properly &mdash; hot-water
            extraction, pet-stain specialists, end-of-tenancy receipts.
            Dry in hours.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.22em] text-ink/50">
            Contact
          </div>
          <ul className="mt-4 space-y-3 text-[14.5px] text-ink/80">
            <li className="flex items-center gap-3">
              <Phone size={14} weight="fill" className="text-honey-deep" />
              <a href="tel:+447700900123" className="hover-underline">
                07700 900 123
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={14} weight="regular" className="text-ink/55" />
              <span>Mon&ndash;Sat, 8am&ndash;6pm</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.22em] text-ink/50">
            Quick links
          </div>
          <ul className="mt-4 space-y-3 text-[14.5px] text-ink/80">
            <li><a href="#services" className="hover-underline">Services</a></li>
            <li><a href="#process" className="hover-underline">How it works</a></li>
            <li><a href="#about" className="hover-underline">About</a></li>
            <li><a href="#reviews" className="hover-underline">Reviews</a></li>
            <li><a href="#contact" className="hover-underline">Free quote</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-3 px-5 py-6 text-[12px] text-ink/50 md:flex-row md:items-center md:px-10">
          <span>&copy; {year} Bee Clean Carpet Cleaning Services.</span>
          <a
            href="https://zcubed.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline"
          >
            Website by Z Cubed Digital
          </a>
        </div>
      </div>
    </footer>
  )
}
