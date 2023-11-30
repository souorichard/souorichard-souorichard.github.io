import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import { ReactNode } from 'react'

import Header from '@/components/Header'
import './globals.css'

const worksans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Portfolio',
    template: '%s | Richard Rodrigues'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${worksans.className} bg-900 overflow-x-hidden`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
