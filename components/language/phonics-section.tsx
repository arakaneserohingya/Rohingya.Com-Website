"use client"

import { useState } from "react"
import { Volume2, Check } from "lucide-react"

import { phonicsData } from "@/lib/data/language"

export function PhonicsSection() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Vowel" | "Consonant">("All")

  const filteredPhonics = phonicsData.filter(
    (item) => activeFilter === "All" || item.category === activeFilter
  )

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Phonics
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground text-balance">
            Master the Sounds
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Learn the building blocks of the Rohingya language. Click on each
            card to hear the sound and see example words.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-8 flex gap-2">
          {(["All", "Vowel", "Consonant"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
            >
              {activeFilter === filter && <Check className="h-3.5 w-3.5" />}
              {filter}
            </button>
          ))}
        </div>

        {/* Phonics grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filteredPhonics.map((item) => (
            <button
              key={item.letter}
              className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:border-primary hover:shadow-md"
            >
              <span className="text-3xl font-bold text-primary">
                {item.letter}
              </span>
              <span className="text-sm font-medium text-foreground">
                {item.sound}
              </span>
              <span className="text-xs text-muted-foreground">
                {item.example}
              </span>
              <Volume2 className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
