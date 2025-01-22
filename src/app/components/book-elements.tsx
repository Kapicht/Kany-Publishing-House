import { motion } from 'framer-motion'

export function BookElements() {
  const books = [
    { rotate: 15, delay: 0 },
    { rotate: -10, delay: 0.2 },
    { rotate: 5, delay: 0.4 },
  ]

  return (
    <div className="absolute top-10 right-10 w-40 h-60 pointer-events-none">
      {books.map((book, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-[#DAA520] rounded"
          style={{
            originX: 0.5,
            originY: 1,
            rotate: book.rotate,
            zIndex: books.length - index,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: book.delay,
          }}
        />
      ))}
    </div>
  )
}

