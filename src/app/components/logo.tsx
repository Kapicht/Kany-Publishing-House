import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="block w-40 mb-8">
      <Image
        src="/kany-logo.jpg"
        alt="Kany Publishing Logo"
        width={160}
        height={160}
        className="w-full h-auto"
        priority
        onError={(e) => {
          console.error("Error loading image:", e)
          e.currentTarget.style.display = "none"
          e.currentTarget.insertAdjacentHTML(
            "afterend",
            '<span class="text-2xl font-bold text-[#8B4513]">Kany Publishing</span>',
          )
        }}
      />
    </Link>
  )
}

