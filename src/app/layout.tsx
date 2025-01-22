import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import Header from '@/app/components/header'
import  Footer  from './components/footer'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Kany Publishing Services',
  description: 'African Stories, Brought to Life in Sharjah',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

