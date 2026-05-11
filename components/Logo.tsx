import Image from 'next/image'

type Props = {
  className?: string
  variant?: 'ink' | 'cream'
}

export default function Logo({ className = '', variant = 'ink' }: Props) {
  const text = variant === 'ink' ? 'text-ink' : 'text-cream'
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        aria-hidden
        className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-honey ring-1 ring-ink/10"
      >
        <Image
          src="/images/LOGO.jpg"
          alt=""
          width={80}
          height={80}
          className="h-full w-full object-cover"
          priority
        />
        <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/15" />
      </span>
      <span
        className={`font-display text-[14px] font-semibold uppercase tracking-[0.22em] ${text}`}
      >
        Bee <span className="text-honey-deep">Clean</span>
      </span>
    </span>
  )
}
