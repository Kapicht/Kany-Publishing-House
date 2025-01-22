'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"

const resources = [
  {
    title: "Introduction to African Literature",
    description: "An overview of the history and development of African literature.",
    link: "/resources/intro-african-literature"
  },
  {
    title: "African Oral Traditions",
    description: "Explore the rich oral storytelling traditions across Africa.",
    link: "/resources/oral-traditions"
  },
  {
    title: "Contemporary African Authors",
    description: "Discover modern voices shaping African literature today.",
    link: "/resources/contemporary-authors"
  },
  {
    title: "African Languages in Literature",
    description: "Learn about the diverse languages used in African writing.",
    link: "/resources/african-languages"
  },
  {
    title: "Themes in African Literature",
    description: "Explore common themes and motifs in African storytelling.",
    link: "/resources/themes"
  },
  {
    title: "African Literature for Children",
    description: "Resources for introducing young readers to African stories.",
    link: "/resources/childrens-literature"
  }
]

export default function ResourcesPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-[#FDF5E6] py-12">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center text-[#FF4500]"
          {...fadeIn}
        >
          Educational Resources
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-12 text-center text-gray-800 max-w-3xl mx-auto"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          Explore our curated collection of educational resources on African literature and culture. These materials are designed to enrich your understanding and appreciation of the diverse literary traditions across the continent.
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              {...fadeIn}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-[#FF4500]">{resource.title}</h2>
                <p className="text-gray-700 mb-4">{resource.description}</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild className="w-full bg-[#FF4500] hover:bg-[#FF4500]/90 text-white">
                    <Link href={resource.link}>Learn More</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          {...fadeIn}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-[#FF4500]">Need More Information?</h2>
          <p className="text-xl mb-8 text-gray-800">
            Our team is always here to help you navigate the rich world of African literature.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild className="bg-[#DAA520] hover:bg-[#DAA520]/90 text-white px-8 py-3 text-lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

