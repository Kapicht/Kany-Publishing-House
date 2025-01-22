'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"

const blogPosts = [
  {
    title: "Why Representation in Children's Literature Matters",
    excerpt: "Explore the importance of diverse voices in shaping young minds and how African literature contributes to a more inclusive world of children's books.",
    author: "Amina Kourouma",
    date: "2023-05-15",
    slug: "representation-in-childrens-literature"
  },
  {
    title: "The Art of African Storytelling: Then and Now",
    excerpt: "Discover the rich tradition of oral storytelling in Africa and how modern African authors are preserving and evolving these narrative techniques.",
    author: "Kwame Osei",
    date: "2023-06-02",
    slug: "art-of-african-storytelling"
  },
  {
    title: "Exploring the Legacy of Chinua Achebe",
    excerpt: "A deep dive into the works of Chinua Achebe and his lasting impact on African literature and postcolonial studies.",
    author: "Ngozi Adichie",
    date: "2023-06-20",
    slug: "legacy-of-chinua-achebe"
  },
  {
    title: "The Rise of African Science Fiction",
    excerpt: "From Nnedi Okorafor to Tade Thompson, African authors are making waves in the world of science fiction. Learn about this exciting genre.",
    author: "Wole Talabi",
    date: "2023-07-08",
    slug: "rise-of-african-science-fiction"
  },
  {
    title: "Preserving Indigenous Languages Through Literature",
    excerpt: "How African authors are using literature to keep indigenous languages alive and vibrant in the face of globalization.",
    author: "Zukiswa Wanner",
    date: "2023-07-25",
    slug: "preserving-indigenous-languages"
  }
]

export default function BlogPage() {
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
          Kany Publishing Blog
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-12 text-center text-[#4A0E0E] max-w-3xl mx-auto"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          Dive into the world of African literature with our latest articles, author interviews, and literary insights.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              {...fadeIn}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-[#8B4513]">{post.title}</h2>
                <p className="text-sm text-[#4A0E0E]/80 mb-4">By {post.author} | {new Date(post.date).toLocaleDateString()}</p>
                <p className="text-[#4A0E0E] mb-4">{post.excerpt}</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild className="bg-[#E57C23] hover:bg-[#E57C23]/90 text-white border-2 border-[#FFD700]">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          {...fadeIn}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-[#8B4513]">Stay Updated</h2>
          <p className="text-xl mb-8 text-[#4A0E0E]">
            Subscribe to our newsletter for the latest articles, author interviews, and literary events.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild className="bg-[#E57C23] hover:bg-[#E57C23]/90 text-white border-2 border-[#FFD700] px-8 py-3 text-lg">
              <Link href="/newsletter">Subscribe Now</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

