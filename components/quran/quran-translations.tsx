"use client"

import { useState } from "react"
import { BookOpen, ArrowRight, Volume2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { surahs } from "@/lib/data/quran"

export function QuranTranslations() {
  const [activeAudio, setActiveAudio] = useState<number | null>(null)

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
            translations for study, reflection, and audio recitation.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {surahs.map((surah) => {
            const isAudioActive = activeAudio === surah.number

            return (
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

                <div className="mt-auto flex flex-col gap-2">
                  <Button
                    variant="outline"
                    className="w-full border-primary/20 text-primary hover:bg-primary/5"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read Translation
                    <ArrowRight className="ml-auto h-4 w-4" />
                  </Button>

                  {surah.audioUrl && (
                    <>
                      {!isAudioActive ? (
                        <Button
                          variant="secondary"
                          className="w-full bg-secondary/50 text-secondary-foreground hover:bg-secondary"
                          onClick={() => setActiveAudio(surah.number)}
                        >
                          <Volume2 className="mr-2 h-4 w-4" />
                          Listen to Translation
                        </Button>
                      ) : (
                        <div className="flex flex-col gap-2 rounded-lg bg-secondary/30 p-3 ring-1 ring-border/50 animate-in fade-in zoom-in-95 duration-200">
                          <div className="flex items-center justify-between pl-1 pr-1">
                            <span className="text-xs font-medium text-foreground">Playing Translation</span>
                            <button onClick={() => setActiveAudio(null)} className="text-muted-foreground hover:text-foreground">
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                          <audio
                            controls
                            autoPlay
                            className="h-9 w-full rounded-md"
                            src={surah.audioUrl}
                          >
                            Your browser does not support the audio element.
                          </audio>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
