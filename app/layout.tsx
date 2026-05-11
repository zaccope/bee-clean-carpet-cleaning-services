import type { Metadata } from 'next'
import { Outfit, DM_Sans } from 'next/font/google'
import Analytics from '@/components/Analytics'
import './globals.css'

const display = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const body = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://bee-clean-carpet-cleaning-services.vercel.app'
const PHONE = '07700 900 123'
const PHONE_TEL = '+447700900123'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Bee Clean Carpet Cleaning | Stains Gone, Carpets Like New',
  description:
    'Bee Clean — professional carpet, rug and upholstery cleaning. Hot-water extraction, pet stain and odour removal, end-of-tenancy cleans. Dry in hours, not days. Free quote: ' +
    PHONE +
    '.',
  openGraph: {
    title: 'Bee Clean Carpet Cleaning | Stains Gone, Carpets Like New',
    description:
      'Carpet, rug and upholstery cleaning. Hot-water extraction, pet stain and odour removal, end-of-tenancy specialists. Dry in hours.',
    url: SITE_URL,
    siteName: 'Bee Clean Carpet Cleaning Services',
    locale: 'en_GB',
    type: 'website',
    images: [`${SITE_URL}/images/LOGO.jpg`],
  },
  icons: {
    icon: '/images/LOGO.jpg',
    shortcut: '/images/LOGO.jpg',
    apple: '/images/LOGO.jpg',
  },
  robots: { index: true, follow: true },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': SITE_URL,
  name: 'Bee Clean Carpet Cleaning Services',
  telephone: PHONE,
  url: SITE_URL,
  image: `${SITE_URL}/images/LOGO.jpg`,
  priceRange: '££',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'United Kingdom',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '38',
  },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Service',
      name: 'Carpet deep cleaning',
      provider: { '@type': 'LocalBusiness', name: 'Bee Clean Carpet Cleaning Services' },
    },
    {
      '@type': 'Service',
      name: 'Upholstery and sofa cleaning',
      provider: { '@type': 'LocalBusiness', name: 'Bee Clean Carpet Cleaning Services' },
    },
    {
      '@type': 'Service',
      name: 'Rug cleaning',
      provider: { '@type': 'LocalBusiness', name: 'Bee Clean Carpet Cleaning Services' },
    },
    {
      '@type': 'Service',
      name: 'Pet stain and odour removal',
      provider: { '@type': 'LocalBusiness', name: 'Bee Clean Carpet Cleaning Services' },
    },
    {
      '@type': 'Service',
      name: 'End-of-tenancy carpet cleaning',
      provider: { '@type': 'LocalBusiness', name: 'Bee Clean Carpet Cleaning Services' },
    },
    {
      '@type': 'Service',
      name: 'Commercial carpet cleaning',
      provider: { '@type': 'LocalBusiness', name: 'Bee Clean Carpet Cleaning Services' },
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take for carpets to dry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most carpets are walk-on-dry in 2 to 4 hours and fully dry within 6. We use hot-water extraction with strong vacuum recovery, so we leave the carpet damp, not soaked.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will you get pet stains and smells out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — we use enzyme treatments that break down urine crystals at the source, then deep-extract. Most pet odours are gone in one visit. Older, soaked-through underlay may need a second pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are the products safe for kids and pets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every product we use is non-toxic and child-and-pet safe once the carpet is dry. We can also run a fragrance-free clean on request.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you do end-of-tenancy cleans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — we give you a dated receipt suitable for landlords, agents and deposit disputes. Book in around your move date and we work around the rest of the clean.',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
