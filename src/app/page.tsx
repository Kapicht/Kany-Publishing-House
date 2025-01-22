"use client"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { BackgroundPattern } from "./components/background-pattern"
import { motion } from "framer-motion"
import Footer from "./components/footer"

export default function Home() {
  return (
    <>
      <BackgroundPattern />
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 bg-[#CC7722]/10 p-8 rounded-lg"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-2 text-[#8B4513]">Kany Publishing</h1>
            <h2 className="text-3xl md:text-4xl mb-6 text-[#8B4513]">African Stories, Brought to Life in Sharjah</h2>
            <p className="text-lg md:text-xl mb-8 text-[#4A0E0E]">
              Discover the vibrant richness of African storytelling. Based in Sharjah, we connect the heritage of African
              narratives with the global stage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Explore Our Books", "Meet the Creative Minds", "Join Us at the Festival", "Sign Up for Updates"].map(
                (text, index) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Button
                      asChild
                      className="bg-[#CC7722] hover:bg-[#CC7722]/90 text-white font-semibold px-6 py-3 text-lg shadow-lg transition-all duration-300 border-2 border-[#FFD700]"
                    >
                      <Link href={`/${text.toLowerCase().replace(/\s+/g, "-")}`}>{text}</Link>
                    </Button>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16 bg-[#8B4513]/10 p-8 rounded-lg relative overflow-hidden"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#8B4513]">Explore African Literature</h2>
            <p className="mb-4 text-[#4A0E0E]">
              Discover the rich tapestry of African literature with our interactive map. Explore stories and authors from
              across the continent.
            </p>
            <Button className="bg-[#CC7722] hover:bg-[#CC7722]/90 text-white border-2 border-[#FFD700]">
              <Link href="/explore">Explore the Map</Link>
            </Button>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 bg-[#8B4513]/10 p-8 rounded-lg relative overflow-hidden"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#8B4513]">Educational Resources</h2>
            <p className="mb-4 text-[#4A0E0E]">
              Dive deeper into African literature and culture with our curated educational resources.
            </p>
            <Button className="bg-[#CC7722] hover:bg-[#CC7722]/90 text-white border-2 border-[#FFD700]">
              <Link href="/resources">Browse Resources</Link>
            </Button>
          </motion.section>
        </div>
      </div>
      <Footer />
    </>
  )
}

