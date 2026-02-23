import type { Metadata, Viewport } from 'next'
import { Noto_Sans, Noto_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
})

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ROHINGYA.com - The Digital Home of the Rohingya Diaspora',
    template: '%s | ROHINGYA.com',
  },
  description:
    'A premier digital hub for the Rohingya community to preserve culture, facilitate education, and provide spiritual resources.',
}

export const viewport: Viewport = {
  themeColor: '#0D4D2B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
