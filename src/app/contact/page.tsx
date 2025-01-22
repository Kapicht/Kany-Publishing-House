'use client'
import { motion } from 'framer-motion'
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { useState } from 'react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    await new Promise(resolve => setTimeout(resolve, 2000))
    setFormStatus('submitted')
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-[#F5DEB3] py-12">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center text-[#CC7722]"
          {...fadeIn}
        >
          Contact Us
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.section 
            className="bg-white/80 rounded-lg shadow-lg p-8"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-[#8B4513]">
              Get in Touch
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-[#4A0E0E]">
              We'd love to hear from you! Whether you're an author, a reader, or just curious about African literature, don't hesitate to reach out.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#CC7722]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-[#4A0E0E]">contact@kany.ae</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#CC7722]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-[#4A0E0E]">+971 XXXXXXXX</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#CC7722]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[#4A0E0E]">Sharjah, United Arab Emirates</span>
              </li>
            </ul>
          </motion.section>

          <motion.section 
            className="bg-[#8B4513]/5 rounded-lg shadow-lg p-8"
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-[#8B4513]">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4A0E0E] mb-1">Name</label>
                <Input id="name" name="name" required className="w-full border-[#CC7722]/20" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4A0E0E] mb-1">Email</label>
                <Input id="email" name="email" type="email" required className="w-full border-[#CC7722]/20" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4A0E0E] mb-1">Message</label>
                <Textarea id="message" name="message" required className="w-full min-h-[150px] border-[#CC7722]/20" />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#CC7722] hover:bg-[#CC7722]/90 text-white border-2 border-[#FFD700]"
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
              {formStatus === 'submitted' && (
                <p className="text-green-600 text-center">Thank you for your message. We'll get back to you soon!</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 text-center">There was an error sending your message. Please try again.</p>
              )}
            </form>
          </motion.section>
        </div>
      </motion.div>
    </div>
  )
}

