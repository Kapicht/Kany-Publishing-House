import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-2">
        <ul className="flex flex-wrap gap-6 justify-between items-center">
          <li>
            <Link href="/" className="flex items-center group">
              <Image
                src="/kany-logo.jpg"
                alt="Kany Publishing House Logo"
                width={50}
                height={50}
                className="rounded-full transition-transform duration-300 group-hover:scale-110"
                priority
              />
              <span className="sr-only">Kany Publishing House</span>
            </Link>
          </li>
          <div className="flex gap-6 items-center">
            <li>
              <Link href="/about" className="text-black hover:text-primary transition-colors relative group">
                About Us
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            </li>
            <li>
              <Link href="/books" className="text-black hover:text-primary transition-colors relative group">
                Our Books
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            </li>
            <li>
              <Link href="/explore" className="text-black hover:text-primary transition-colors relative group">
                Explore
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/meet-the-creative-minds"
                className="text-black hover:text-primary transition-colors relative group"
              >
                Creative Minds
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-black hover:text-primary transition-colors relative group">
                Resources
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-black hover:text-primary transition-colors relative group">
                Blog
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-black hover:text-primary transition-colors relative group">
                Events
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-black hover:text-primary transition-colors relative group">
                Contact
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

