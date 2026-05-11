import { PhoneCall, ClipboardText, Drop, ThumbsUp } from '@phosphor-icons/react/dist/ssr'

const STEPS = [
  {
    icon: PhoneCall,
    n: '01',
    title: 'Quick call',
    body:
      'Tell us the rooms, the rough state, and any pet or kid issues. Quote back in minutes, slot in the diary by the end of the call.',
  },
  {
    icon: ClipboardText,
    n: '02',
    title: 'Pre-treat &amp; protect',
    body:
      'On the day we move what we can, protect what we can’t, and pre-treat traffic lanes, edges and any specific stains you’ve flagged.',
  },
  {
    icon: Drop,
    n: '03',
    title: 'Deep extract',
    body:
      'Hot water injected, dirt vacuumed straight back out. Stairs, landings, awkward edges &mdash; every inch gets the same attention.',
  },
  {
    icon: ThumbsUp,
    n: '04',
    title: 'Dry &amp; check',
    body:
      'Walk-on-dry in 2&ndash;4 hours. We walk every room with you before we leave &mdash; if you’re not happy, we put it right then and there.',
  },
]

export default function Process() {
  return (
    <section id="process" className="border-t border-ink/10 bg-cream">
      <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-10 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink/55">
              How it works
            </div>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-[1.02] tracking-tightest text-ink md:text-6xl">
              Four steps. Done in a morning.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-ink/70">
            No mystery, no upsell on the doorstep. The price you’re
            quoted is the price you pay.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.n} className="bg-cream p-7 md:p-8">
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-honey/15 text-honey-shadow ring-1 ring-honey/30">
                  <s.icon size={22} weight="regular" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40">
                  {s.n}
                </span>
              </div>
              <h3
                className="mt-7 font-display text-xl font-semibold tracking-tight text-ink"
                dangerouslySetInnerHTML={{ __html: s.title }}
              />
              <p
                className="mt-3 text-[14.5px] leading-relaxed text-ink/70"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
