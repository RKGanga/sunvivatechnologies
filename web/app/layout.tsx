import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Institution Training | Cloud, DevOps, Linux, Scripting',
  description: 'Professional institutional website for Cloud, DevOps, Linux, and Programming courses.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
