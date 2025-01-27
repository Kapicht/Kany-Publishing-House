"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { MapPin, Book, User } from "lucide-react"
import Image from "next/image"

type Country = {
  id: string
  name: string
  image: string
  position: { top: string; left: string }
  authors: Array<{
    name: string
    book: string
    description: string
  }>
}

const countries: Country[] = [
  {
    id: "nigeria",
    name: "Nigeria",
    image: "/images/nigeria.png",
    position: { top: "40%", left: "20%" },
    authors: [
      {
        name: "Chinua Achebe",
        book: "Things Fall Apart",
        description:
          "A classic of African literature that explores the collision between African and European cultures.",
      },
      {
        name: "Chimamanda Ngozi Adichie",
        book: "Half of a Yellow Sun",
        description:
          "A masterful novel set during Nigeria's Biafran War, exploring love, loyalty, and the impact of war.",
      },
    ],
  },
  {
    id: "kenya",
    name: "Kenya",
    image: "/images/kenya.png",
    position: { top: "45%", left: "55%" },
    authors: [
      {
        name: "Ngũgĩ wa Thiong'o",
        book: "Weep Not, Child",
        description: "A powerful coming-of-age story set against the backdrop of Kenya's struggle for independence.",
      },
      {
        name: "Yvonne Adhiambo Owuor",
        book: "Dust",
        description: "A sweeping novel that delves into Kenya's troubled past and its impact on multiple generations.",
      },
    ],
  },
  {
    id: "south-africa",
    name: "South Africa",
    image: "/images/south-africa.png",
    position: { top: "80%", left: "45%" },
    authors: [
      {
        name: "Nadine Gordimer",
        book: "July's People",
        description: "A gripping novel that imagines the collapse of South Africa's apartheid regime.",
      },
      {
        name: "J.M. Coetzee",
        book: "Disgrace",
        description: "A profound and unsettling exploration of post-apartheid South Africa.",
      },
    ],
  },
]

export default function ExplorePage() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-20">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl font-bold mb-8 text-center text-[#8B4513]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Explore African Literature
        </motion.h1>

        <motion.p
          className="text-xl mb-12 text-center text-[#4A0E0E] max-w-3xl mx-auto"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Embark on a literary journey across Africa. Discover the rich tapestry of stories, voices, and traditions that
          make up the continent's diverse literary landscape.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-[#8B4513]">Interactive Map</h2>
            <div className="relative w-full h-[400px] bg-[#FFD700]/20 rounded-lg overflow-hidden">
              <Image src="/images/africa-map.jpeg" alt="Map of Africa" layout="fill" objectFit="cover" />
              {countries.map((country) => (
                <motion.div
                  key={country.id}
                  className="absolute"
                  style={{
                    top: country.position.top,
                    left: country.position.left,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="bg-[#CC7722] hover:bg-[#CC7722]/90 text-white"
                    onClick={() => setSelectedCountry(country)}
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    {country.name}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {selectedCountry ? (
              <motion.div
                key={selectedCountry.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white shadow-lg">
                  <CardHeader className="relative h-48">
                    <Image
                      src={selectedCountry.image || "/placeholder.svg"}
                      alt={selectedCountry.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                    <CardTitle className="absolute bottom-4 left-4 text-3xl font-bold text-white bg-[#8B4513]/80 px-3 py-1 rounded">
                      {selectedCountry.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardDescription className="text-lg mb-4 text-[#4A0E0E]">Featured Authors</CardDescription>
                    {selectedCountry.authors.map((author, index) => (
                      <motion.div
                        key={index}
                        className="mb-6 bg-[#FFD700]/10 p-4 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <h3 className="text-xl font-semibold text-[#CC7722] flex items-center">
                          <User className="mr-2 h-5 w-5" />
                          {author.name}
                        </h3>
                        <p className="text-[#4A0E0E] font-medium mt-2 flex items-center">
                          <Book className="mr-2 h-4 w-4" />
                          Notable work: {author.book}
                        </p>
                        <p className="text-[#4A0E0E] mt-2">{author.description}</p>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                className="h-full flex items-center justify-center text-[#4A0E0E]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-xl">Select a country to explore its literature</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-[#8B4513]">Discover More</h2>
          <p className="text-xl mb-8 text-[#4A0E0E]">
            Want to dive deeper into African literature? Check out our curated collection of books from across the
            continent.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-[#8B4513] hover:bg-[#8B4513]/90 text-white px-8 py-3 text-lg">
              Browse Our Books
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

