import { Button } from "@/app/components/ui/button"
import Link from "next/link"

export default function OurBooks() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Books</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Tell Me About Timbuktu</h2>
          <p className="mb-2"><strong>Age Group:</strong> 7–12 years</p>
          <p className="mb-4">
            {/* Add synopsis here */}
          </p>
          <Button asChild><Link href="/books/tell-me-about-timbuktu">Learn More</Link></Button>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Tentative Title</h2>
          <p className="mb-2"><strong>Age Group:</strong> 8–12 years</p>
          <p className="mb-4">
            Set in [vibrant African backdrop], this story follows [Main Character] as they solve a mystery rooted in an ancient cultural tradition. This heartwarming adventure reminds readers of the importance of family and heritage.
          </p>
          <p className="text-sm italic mb-4">
            Launching at the Sharjah Children's Reading Festival in May! Stay tuned for sneak peeks and pre-order options.
          </p>
          <Button asChild variant="outline"><Link href="/books/tentative-title">Coming Soon</Link></Button>
        </div>
      </div>
    </div>
  )
}

