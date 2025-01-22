'use client'
import { motion } from 'framer-motion'

export default function AboutUs() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center text-[#E57C23]"
          {...fadeIn}
        >
          About Kany Publishing
        </motion.h1>
        
        <motion.section 
          className="mb-20 bg-[#E57C23]/5 rounded-lg shadow-lg p-8 relative overflow-hidden"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-[#8B4513]">Rooted in Africa, Publishing for the World</h2>
          <p className="mb-4 text-lg leading-relaxed text-[#4A0E0E]">
            Our publishing house is born from a love of African storytelling. Located in Sharjah—a global hub for literature—we are a bridge connecting Africa's timeless narratives to readers everywhere. Our mission is simple: to preserve African voices, inspire young minds, and share diverse stories that matter.
          </p>
        </motion.section>
  
        <motion.section 
          className="mb-20 bg-white rounded-lg shadow-lg p-8"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-[#8B4513]">Our Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#E57C23]">Vision</h3>
              <p className="text-lg leading-relaxed text-[#4A0E0E]">
                To be the leading global ambassador for African stories, celebrating the continent's diverse cultures and voices while fostering a deeper connection between Africa and the world through literature.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#E57C23]">Mission</h3>
              <p className="text-lg leading-relaxed text-[#4A0E0E]">
                At Kany Publishing House, our mission is to amplify African narratives by publishing authentic, inspiring, and diverse works that celebrate African heritage. We aim to provide a platform for African writers, enrich the global literary landscape, and create meaningful cultural exchanges.
              </p>
            </div>
          </div>
        </motion.section>
  
        <motion.section 
          className="mb-20 bg-[#E57C23]/5 rounded-lg shadow-lg p-8 relative overflow-hidden"
          {...fadeIn}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-[#8B4513]">Why Sharjah?</h2>
          <p className="text-lg leading-relaxed text-[#4A0E0E] relative z-10">
            Sharjah, UNESCO's World Book Capital, is the ideal base for our publishing house. As a global cultural hub, it provides a platform to bring African stories to the forefront of the literary world while fostering cross-cultural connections.
          </p>
        </motion.section>
      </motion.div>
    </div>
  )
}

