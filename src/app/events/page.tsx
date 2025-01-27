"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { CalendarDays, MapPin, Users } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Sharjah Children's Reading Festival 2024",
    date: "April 15-25, 2024",
    location: "Expo Centre Sharjah",
    description:
      "Join us for a celebration of children's literature from across Africa and the Middle East. Meet authors, illustrators, and fellow book lovers!",
    attendees: 5000,
  },
  {
    id: 2,
    title: "African Literature Symposium",
    date: "June 10-12, 2024",
    location: "Sharjah University",
    description:
      "A three-day conference exploring contemporary African literature, featuring keynote speeches, panel discussions, and workshops.",
    attendees: 500,
  },
  {
    id: 3,
    title: "Book Launch: 'Saharan Whispers' by Amina Kourouma",
    date: "July 5, 2024",
    location: "Kany Publishing Headquarters",
    description:
      "Be among the first to get your hands on this captivating new novel set in the heart of the Sahara. Meet the author and enjoy a reading session.",
    attendees: 200,
  },
  {
    id: 4,
    title: "Young Writers Workshop Series",
    date: "Every Saturday, August 2024",
    location: "Various locations in Sharjah",
    description:
      "A month-long series of workshops designed to nurture the next generation of African storytellers. Open to aspiring writers aged 12-18.",
    attendees: 100,
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12">
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
          Upcoming Events
        </motion.h1>

        <motion.p
          className="text-xl mb-12 text-center text-[#4A0E0E] max-w-3xl mx-auto"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join us in celebrating African literature through our exciting events and festivals. Connect with authors,
          discover new stories, and immerse yourself in the rich tapestry of African storytelling.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#8B4513]">{event.title}</CardTitle>
                  <CardDescription className="text-[#4A0E0E]">
                    <div className="flex items-center mt-2">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center mt-1">
                      <MapPin className="mr-2 h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center mt-1">
                      <Users className="mr-2 h-4 w-4" />
                      {event.attendees} expected attendees
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4A0E0E]">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#CC7722] hover:bg-[#CC7722]/90 text-white border-2 border-[#FFD700]">
                    Register Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-[#8B4513]">Can't Make It to an Event?</h2>
          <p className="text-xl mb-8 text-[#4A0E0E]">
            Don't worry! Sign up for our newsletter to stay updated on future events and get exclusive content from our
            authors.
          </p>
          <Button asChild className="bg-[#8B4513] hover:bg-[#8B4513]/90 text-white px-8 py-3 text-lg">
            <Link href="/newsletter">Subscribe to Newsletter</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

