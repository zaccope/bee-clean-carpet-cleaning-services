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
const PHONE = '07885 386 820'
const PHONE_TEL = '+447885386820'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Bee Clean | Carpet, Upholstery & Hard-Floor Cleaning Specialists',
  description:
    'Bee Clean — Wool Safe approved carpet, multi-floor and upholstery cleaning across Staffordshire, Cheshire, Derbyshire and Shropshire. 500+ five-star reviews. Commercial & residential. Free quote: ' +
    PHONE +
    '.',
  openGraph: {
    title: 'Bee Clean | Carpet, Upholstery & Hard-Floor Cleaning Specialists',
    description:
      'Wool Safe approved carpet, multi-floor and upholstery cleaning across Staffs, Cheshire, Derbyshire & Shropshire. 500+ five-star Facebook reviews.',
    url: SITE_URL,
    siteName: 'Bee Clean Carpet Cleaning Services',
    locale: 'en_GB',
    type: 'website',
    images: [`${SITE_URL}/images/PROMO.jpg`],
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
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Staffordshire' },
    { '@type': 'AdministrativeArea', name: 'Cheshire' },
    { '@type': 'AdministrativeArea', name: 'Derbyshire' },
    { '@type': 'AdministrativeArea', name: 'Shropshire' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '500',
  },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Service',
      name: 'Wool Safe approved carpet cleaning',
      provider: { '@type': 'LocalBusiness', name: 'Bee Clean Carpet Cleaning Services' },
    },
    {
      '@type': 'Service',
      name: 'Upholstery and sofa cleaning',
      provider: { '@type': 'LocalBusiness', name: 'Bee Clean Carpet Cleaning Services' },
    },
    {
      '@type': 'Service',
      name: 'Hard floor cleaning (LVT, Karndean, vinyl, tile, stone, safety flooring)',
      provider: { '@type': 'LocalBusiness', name: 'Bee Clean Carpet Cleaning Services' },
    },
    {
      '@type': 'Service',
      name: 'Stain removal and odour treatment',
      provider: { '@type': 'LocalBusiness', name: 'Bee Clean Carpet Cleaning Services' },
    },
    {
      '@type': 'Service',
      name: 'End-of-tenancy carpet cleaning',
      provider: { '@type': 'LocalBusiness', name: 'Bee Clean Carpet Cleaning Services' },
    },
    {
      '@type': 'Service',
      name: 'Commercial fixed seating and micro bonnet cleaning',
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
      name: 'What areas does Bee Clean cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We cover Staffordshire, Cheshire, Derbyshire and Shropshire for both residential and commercial cleans. Anything further out, call and ask.',
      },
    },
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
      name: 'Are the products safe for wool, kids and pets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — we are Wool Safe approved, and every product we use is non-toxic and child-and-pet safe once dry. We can run a fragrance-free clean on request.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you clean hard floors as well as carpet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — LVT, Karndean, vinyl, ceramic tile, stone, sealed wood and safety flooring. We deep-clean the grout lines too. Carpet and hard floor in the same visit is no problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you do commercial work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — fixed seating, chairs, stools, office carpet, dealership showrooms, pubs, restaurants and salons. Evenings and weekends to fit around your trade.',
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
