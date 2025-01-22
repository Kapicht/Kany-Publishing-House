import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex flex-wrap gap-6 justify-between items-center">
          <li>
            <Link href="/" className="text-2xl font-bold text-black hover:text-primary transition-colors">
              Kany Publishing House
            </Link>
          </li>
          <div className="flex gap-6 items-center">
            <li><Link href="/about" className="text-black hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/books" className="text-black hover:text-primary transition-colors">Our Books</Link></li>
            <li><Link href="/explore" className="text-black hover:text-primary transition-colors">Explore</Link></li>
            <li><Link href="/resources" className="text-black hover:text-primary transition-colors">Resources</Link></li>
            <li><Link href="/blog" className="text-black hover:text-primary transition-colors">Blog</Link></li>
            <li><Link href="/events" className="text-black hover:text-primary transition-colors">Events</Link></li>
            <li><Link href="/contact" className="text-black hover:text-primary transition-colors">Contact</Link></li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

