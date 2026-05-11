import Image from 'next/image'

const SHOTS = [
  { src: '/images/12.jpg', alt: 'Mid-clean grey carpet showing a fresh extraction stripe', tag: 'Mid-clean', span: 'md:col-span-3' },
  { src: '/images/8.jpg', alt: 'Cream wool carpet hallway with crisp extraction lines', tag: 'Hallway clean', span: 'md:col-span-3' },
  { src: '/images/11.jpg', alt: 'Grey stair carpet freshly groomed top to bottom', tag: 'Full staircase', span: 'md:col-span-2' },
  { src: '/images/7.jpg', alt: 'Commercial chairs being deep-cleaned at a car dealership', tag: 'Commercial', span: 'md:col-span-2' },
  { src: '/images/2.jpg', alt: 'Grey corner sofa upholstery being deep-cleaned with an air mover', tag: 'Upholstery', span: 'md:col-span-2' },
  { src: '/images/4.jpg', alt: 'Tartan carpet showing visible cleaned stripes through the pattern', tag: 'Pattern carpet', span: 'md:col-span-3' },
  { src: '/images/1.jpg', alt: 'Red patterned stair carpet being lifted with extraction wand', tag: 'Stairs', span: 'md:col-span-3' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="border-t border-ink/10 bg-cream">
      <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-10 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink/55">
              Recent work
            </div>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-[1.02] tracking-tightest text-ink md:text-6xl">
              The difference is the stripes.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-ink/70">
            Real customer jobs across Staffordshire, Cheshire, Derbyshire and
            Shropshire. The clean lines are the extraction wand pulling
            soil straight back out the pile.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
          {SHOTS.map((s, i) => (
            <figure
              key={s.src}
              className={`group relative overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white ${s.span} ${i === 0 || i === 1 ? 'aspect-[4/3]' : 'aspect-[3/4]'}`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-3 bottom-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-ink/65 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cream backdrop-blur-md">
                <span className="h-1 w-1 rounded-full bg-honey" />
                {s.tag}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
