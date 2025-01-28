import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kany Publishing",
  description: "African Stories, Brought to Life in Sharjah",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-[#8B4513] text-white py-4">
          <nav className="container mx-auto px-4">
            <ul className="flex justify-center space-x-6">
              <li>
                <Link href="/" className="hover:text-[#FFD700]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FFD700]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/books" className="hover:text-[#FFD700]">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/explore" className="hover:text-[#FFD700]">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#FFD700]">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#FFD700]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFD700]">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

