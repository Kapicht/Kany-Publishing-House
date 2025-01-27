"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"

type CreativeMind = {
  name: string
  role: string
  bio: string
  image: string
}

const creativeMinds: CreativeMind[] = [
  {
    name: "Chinua Achebe",
    role: "Senior Editor",
    bio: "Renowned Nigerian novelist and poet, Chinua brings decades of literary experience to our team.",
    image: "/images/chinua-achebe.jpg",
  },
  {
    name: "Chimamanda Ngozi Adichie",
    role: "Creative Director",
    bio: "Award-winning author known for her powerful storytelling and insightful commentary on culture and identity.",
    image: "/images/chimamanda-adichie.jpg",
  },
  {
    name: "Ngugi wa Thiong'o",
    role: "Literary Consultant",
    bio: "Kenyan writer and academic, Ngugi contributes his vast knowledge of African literature and language.",
    image: "/images/ngugi-wa-thiongo.jpg",
  },
  {
    name: "Nnedi Okorafor",
    role: "Sci-Fi and Fantasy Editor",
    bio: "Multiple award-winning author specializing in African-based science fiction, fantasy, and magical realism.",
    image: "/images/nnedi-okorafor.jpg",
  },
  {
    name: "Ben Okri",
    role: "Poetry Editor",
    bio: "Nigerian poet and novelist, Ben brings his unique perspective and lyrical style to our poetry selections.",
    image: "/images/ben-okri.jpg",
  },
  {
    name: "Tsitsi Dangarembga",
    role: "Young Adult Fiction Editor",
    bio: "Zimbabwean author and filmmaker, Tsitsi focuses on stories that resonate with young African readers.",
    image: "/images/tsitsi-dangarembga.jpg",
  },
]

export default function MeetTheCreativeMinds() {
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
          Meet the Creative Minds
        </motion.h1>

        <motion.p
          className="text-xl mb-12 text-center text-[#4A0E0E] max-w-3xl mx-auto"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover the talented individuals behind Kany Publishing House who bring African stories to life.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creativeMinds.map((mind, index) => (
            <motion.div
              key={mind.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={mind.image || "/placeholder.svg"}
                alt={mind.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-[#8B4513]">{mind.name}</h2>
                <h3 className="text-lg font-medium mb-4 text-[#CC7722]">{mind.role}</h3>
                <p className="text-[#4A0E0E] mb-4">{mind.bio}</p>
                <Button asChild className="w-full bg-[#CC7722] hover:bg-[#CC7722]/90 text-white">
                  <Link href={`/author/${mind.name.toLowerCase().replace(/\s+/g, "-")}`}>Read More</Link>
                </Button>
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
          <h2 className="text-3xl font-semibold mb-6 text-[#8B4513]">Join Our Creative Team</h2>
          <p className="text-xl mb-8 text-[#4A0E0E]">
            Are you passionate about African literature? We're always looking for new talent to join our team.
          </p>
          <Button asChild className="bg-[#8B4513] hover:bg-[#8B4513]/90 text-white px-8 py-3 text-lg">
            <Link href="/careers">View Open Positions</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

