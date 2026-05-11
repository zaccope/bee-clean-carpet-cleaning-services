const STATS = [
  { k: '4.9★', v: 'Average rating' },
  { k: '2–4 hrs', v: 'Walk-on-dry time' },
  { k: '100%', v: 'Pet & kid safe' },
  { k: 'Same week', v: 'Most bookings' },
]

export default function About() {
  return (
    <section id="about" className="border-t border-ink/10">
      <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink/55">
              About
            </div>
            <h2 className="mt-3 font-display text-4xl font-medium leading-[1.02] tracking-tightest text-ink md:text-[3.75rem]">
              A small outfit.<br />
              <span className="text-ink/45">Properly clean carpets.</span>
            </h2>
            <p className="mt-6 hidden text-[13px] uppercase tracking-[0.22em] text-honey-shadow md:block">
              Local &middot; Insured &middot; Honest pricing
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-6 text-[17px] leading-relaxed text-ink/85 md:text-[1.15rem]">
              <p>
                Bee Clean is a small independent carpet cleaning outfit.
                Our own kit, our own van, our own backs &mdash; same care
                whether it&rsquo;s a £60 rug or a four-bedroom house.
              </p>
              <p>
                Most of the diary fills through neighbours, mates and the
                same handful of letting agents. That only keeps happening
                if the carpet still looks good a month later. So that&rsquo;s
                what we aim for.
              </p>
              <blockquote className="relative mt-8 border-l-2 border-honey-deep bg-paperInk/40 py-6 pl-6 pr-5 font-display text-xl leading-snug text-ink md:text-2xl">
                &ldquo;If it&rsquo;s not noticeably better than when we
                walked in, you don&rsquo;t pay for it.&rdquo;
                <span className="mt-2 block font-sans text-[12px] uppercase tracking-[0.22em] text-ink/50">
                  &mdash; Bee Clean
                </span>
              </blockquote>
            </div>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.v} className="bg-cream p-7 md:p-8">
              <dt className="text-[11px] uppercase tracking-[0.22em] text-ink/55">
                {s.v}
              </dt>
              <dd className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem]">
                {s.k}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
