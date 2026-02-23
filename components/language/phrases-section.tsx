"use client"

import { Volume2, ArrowRight } from "lucide-react"

const phrases = [
  {
    english: "Hello / Peace be upon you",
    rohingya: "Assalamu Alaikum",
    pronunciation: "As-sa-la-mu A-lai-kum",
    context: "Greeting",
  },
  {
    english: "How are you?",
    rohingya: "Tuain keman asou?",
    pronunciation: "Tu-ain ke-man a-sou",
    context: "Greeting",
  },
  {
    english: "I am fine",
    rohingya: "Aing bala asou",
    pronunciation: "Aing ba-la a-sou",
    context: "Response",
  },
  {
    english: "What is your name?",
    rohingya: "Tunar naam ki?",
    pronunciation: "Tu-nar naam ki",
    context: "Introduction",
  },
  {
    english: "My name is...",
    rohingya: "Anar naam...",
    pronunciation: "A-nar naam",
    context: "Introduction",
  },
  {
    english: "Thank you",
    rohingya: "Shukuria",
    pronunciation: "Shu-ku-ri-a",
    context: "Politeness",
  },
  {
    english: "Where are you from?",
    rohingya: "Tui hunde goijja?",
    pronunciation: "Tui hun-de goi-jja",
    context: "Conversation",
  },
  {
    english: "I am from Arakan",
    rohingya: "Aing Arakan goijja",
    pronunciation: "Aing A-ra-kan goi-jja",
    context: "Conversation",
  },
  {
    english: "Goodbye",
    rohingya: "Allah Hafez",
    pronunciation: "Al-lah Ha-fez",
    context: "Farewell",
  },
  {
    english: "Water",
    rohingya: "Fani",
    pronunciation: "Fa-ni",
    context: "Essential",
  },
  {
    english: "Food",
    rohingya: "Kana",
    pronunciation: "Ka-na",
    context: "Essential",
  },
  {
    english: "Family",
    rohingya: "Goshti",
    pronunciation: "Gosh-ti",
    context: "Essential",
  },
]

export function PhrasesSection() {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Common Phrases
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground text-balance">
            Essential Rohingya Phrases
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Start with these everyday phrases and greetings. Each phrase
            includes a pronunciation guide to help you speak with confidence.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {phrases.map((phrase) => (
            <div
              key={phrase.english}
              className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-medium text-accent">
                  {phrase.context}
                </span>
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  aria-label={`Listen to ${phrase.rohingya}`}
                >
                  <Volume2 className="h-4 w-4" />
                </button>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {phrase.english}
                </p>
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-3.5 w-3.5 text-primary" />
                  <p className="text-lg font-bold text-primary">
                    {phrase.rohingya}
                  </p>
                </div>
              </div>
              <p className="text-xs italic text-muted-foreground">
                {phrase.pronunciation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
