import { BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const surahs = [
  {
    number: 1,
    arabic: "Al-Fatihah",
    english: "The Opening",
    rohingya: "Faitah",
    verses: 7,
    description:
      "The first chapter of the Quran, recited in every unit of prayer.",
  },
  {
    number: 36,
    arabic: "Ya-Sin",
    english: "Ya-Sin",
    rohingya: "Iasiin",
    verses: 83,
    description:
      "Often referred to as the Heart of the Quran for its themes of resurrection and divine mercy.",
  },
  {
    number: 55,
    arabic: "Ar-Rahman",
    english: "The Most Merciful",
    rohingya: "Ar-Rohman",
    verses: 78,
    description:
      "A chapter celebrating the mercy and blessings of Allah upon creation.",
  },
  {
    number: 67,
    arabic: "Al-Mulk",
    english: "The Sovereignty",
    rohingya: "Al-Mulk",
    verses: 30,
    description:
      "A chapter reflecting on the sovereignty and majesty of the Creator.",
  },
  {
    number: 112,
    arabic: "Al-Ikhlas",
    english: "The Sincerity",
    rohingya: "Ikhlaas",
    verses: 4,
    description:
      "A concise declaration of the oneness of God, equal to a third of the Quran.",
  },
  {
    number: 114,
    arabic: "An-Nas",
    english: "Mankind",
    rohingya: "An-Naas",
    verses: 6,
    description:
      "The final chapter, a prayer seeking refuge in God from evil.",
  },
]

export function QuranTranslations() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Rohingya Quran
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground text-balance">
            Quranic Translations in Rohingya
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Access digitized translations of the Holy Quran in the Rohingya
            language. Each surah includes Arabic text alongside Rohingya
            translations for study and reflection.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {surahs.map((surah) => (
            <div
              key={surah.number}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                  <span className="text-lg font-bold text-accent">
                    {surah.number}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {surah.verses} verses
                </span>
              </div>

              <h3 className="mb-1 text-lg font-bold text-foreground">
                {surah.arabic}
              </h3>
              <p className="mb-1 text-sm font-medium text-primary">
                {surah.english}
              </p>
              <p className="mb-3 text-xs text-accent">
                Rohingya: {surah.rohingya}
              </p>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {surah.description}
              </p>

              <Button
                variant="outline"
                className="w-full border-primary/20 text-primary hover:bg-primary/5"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Read Translation
                <ArrowRight className="ml-auto h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
