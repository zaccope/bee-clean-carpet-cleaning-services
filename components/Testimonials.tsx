const QUOTES = [
  {
    body:
      "Three-year-old cream wool carpet, two kids, a beagle and a red-wine accident. Genuinely thought we&rsquo;d be replacing it. Booked Bee Clean on the Friday, dry by lunchtime Saturday, looks brand new. Saved us £800 in new flooring.",
    name: 'Hannah P.',
    place: 'Stafford',
  },
  {
    body:
      "End-of-tenancy clean &mdash; landlord tried to keep half our deposit over the carpets. Receipt and a couple of before/after photos from Bee Clean and we got the lot back. Worth every penny.",
    name: 'Iwan R.',
    place: 'Macclesfield',
  },
  {
    body:
      "Had the LVT in the kitchen and the corner sofa done in one visit. Floor looks like the day it was laid, sofa smells like a sofa again. In and out in three hours, paid what they quoted.",
    name: 'Marcie L.',
    place: 'Buxton',
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-[980px] px-5 py-20 md:px-10 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink/55">
              Reviews
            </div>
            <h2 className="mt-3 font-display text-4xl font-medium leading-[1.04] tracking-tightest text-ink md:text-6xl">
              What customers actually say.
            </h2>
          </div>
          <span className="hidden rounded-full border border-ink/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-ink/55 md:inline-block">
            500+ five-star on Facebook
          </span>
        </div>

        <ul className="mt-14 space-y-14 md:space-y-20">
          {QUOTES.map((q, i) => (
            <li
              key={q.name}
              className={`relative grid grid-cols-1 gap-6 md:grid-cols-12 ${
                i % 2 === 1 ? 'md:pl-24' : ''
              }`}
            >
              <div className="md:col-span-1">
                <span className="block h-px w-10 bg-honey-deep md:h-14 md:w-[2px]" />
              </div>
              <div className="md:col-span-11">
                <p
                  className="font-display text-2xl leading-snug text-ink md:text-[2rem] md:leading-[1.18]"
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${q.body}&rdquo;` }}
                />
                <div className="mt-5 flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-ink/55">
                  <span className="font-semibold text-ink/75">{q.name}</span>
                  <span className="h-1 w-1 rounded-full bg-ink/30" />
                  <span>{q.place}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
