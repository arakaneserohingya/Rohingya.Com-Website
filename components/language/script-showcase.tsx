import { Languages, ArrowRight } from "lucide-react"

export function ScriptShowcase() {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Languages className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground text-balance">
              Two Scripts, One Language
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              The Rohingya language can be written in both the Hanifi Rohingya
              script and the Latin alphabet. The Hanifi script was created by
              Mohammad Hanif in the 1980s to provide a unique writing system for
              the Rohingya language.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Our language portal supports dual-script rendering, so you can
              learn to read and write in both systems side by side.
            </p>
          </div>

          {/* Script comparison cards */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
                Hanifi Rohingya Script
              </p>
              <p className="text-4xl leading-relaxed text-foreground" dir="rtl">
                {"\u{10D00}\u{10D0D}\u{10D09}\u{10D1E}\u{10D06}\u{10D0A}"}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Written right-to-left, the Hanifi script has 28 letters
              </p>
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="h-6 w-6 rotate-90 text-muted-foreground" />
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
                Latin Transliteration
              </p>
              <p className="text-4xl leading-relaxed text-foreground">
                Ruaingga
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Latin alphabet representation used for wider accessibility
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
