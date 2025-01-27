"use client"

import { Button } from "@/app/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const books = [
  {
    title: "Tell Me About Timbuktu",
    ageGroup: "7–12 years",
    synopsis:
      "Join Amina on her magical journey through time as she discovers the wonders of ancient Timbuktu. This beautifully illustrated book brings to life the rich history and culture of one of Africa's most fascinating cities.",
    link: "/books/tell-me-about-timbuktu",
    image: "/images/timbuktu-cover.jpg",
    status: "available",
  },
  {
    title: "The Secret of the Baobab Tree",
    ageGroup: "8–12 years",
    synopsis:
      "Set in the lush landscapes of Madagascar, this story follows young Kojo as he unravels a mystery rooted in an ancient baobab tree. This heartwarming adventure reminds readers of the importance of family, nature, and cultural heritage.",
    link: "/books/secret-of-the-baobab-tree",
    image: "/images/baobab-cover.jpg",
    status: "coming-soon",
  },
]

export default function OurBooks() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] py-20">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl font-bold mb-12 text-center text-[#8B4513]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Books
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-[#8B4513]">{book.title}</h2>
                <p className="mb-2 text-[#CC7722]">
                  <strong>Age Group:</strong> {book.ageGroup}
                </p>
                <p className="mb-4 text-[#4A0E0E]">{book.synopsis}</p>
                {book.status === "coming-soon" && (
                  <p className="text-sm italic mb-4 text-[#CC7722]">
                    Launching at the Sharjah Children's Reading Festival in May! Stay tuned for sneak peeks and
                    pre-order options.
                  </p>
                )}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant={book.status === "coming-soon" ? "outline" : "default"} className="w-full">
                    <Link href={book.link}>{book.status === "coming-soon" ? "Coming Soon" : "Learn More"}</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-[#8B4513]">Explore More</h2>
          <p className="text-xl mb-8 text-[#4A0E0E]">
            Discover our full collection of African stories that inspire and educate young minds.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="bg-[#8B4513] hover:bg-[#8B4513]/90 text-white px-8 py-3 text-lg">
              <Link href="/catalog">View Full Catalog</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

