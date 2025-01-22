'use client'

import { useState } from 'react'
import Image from 'next/image'

type Country = {
  name: string
  coordinates: [number, number]
  stories: string[]
  authors: string[]
}

const countries: Country[] = [
  {
    name: 'Nigeria',
    coordinates: [9, 8],
    stories: ['Things Fall Apart', 'Half of a Yellow Sun'],
    authors: ['Chinua Achebe', 'Chimamanda Ngozi Adichie']
  },
  {
    name: 'Kenya',
    coordinates: [1, 38],
    stories: ['Weep Not, Child', 'The River Between'],
    authors: ['Ngũgĩ wa Thiong\'o']
  },
  {
    name: 'South Africa',
    coordinates: [-30, 25],
    stories: ['Cry, the Beloved Country', 'Born a Crime'],
    authors: ['Alan Paton', 'Trevor Noah']
  },
  // Add more countries here
]

export function InteractiveMap() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)

  return (
    <div className="relative w-full h-[600px]">
      <Image
        src="/africa-map.svg"
        alt="Map of Africa"
        layout="fill"
        objectFit="contain"
      />
      {countries.map((country) => (
        <button
          key={country.name}
          className="absolute w-4 h-4 bg-primary rounded-full hover:w-5 hover:h-5 transition-all"
          style={{
            left: `${country.coordinates[1]}%`,
            top: `${country.coordinates[0]}%`,
          }}
          onClick={() => setSelectedCountry(country)}
          aria-label={`Select ${country.name}`}
        />
      ))}
      {selectedCountry && (
        <div className="absolute top-0 right-0 bg-background p-4 rounded-lg shadow-lg max-w-xs">
          <h3 className="text-lg font-bold mb-2">{selectedCountry.name}</h3>
          <h4 className="font-semibold">Notable Stories:</h4>
          <ul className="list-disc list-inside mb-2">
            {selectedCountry.stories.map((story) => (
              <li key={story}>{story}</li>
            ))}
          </ul>
          <h4 className="font-semibold">Notable Authors:</h4>
          <ul className="list-disc list-inside">
            {selectedCountry.authors.map((author) => (
              <li key={author}>{author}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

