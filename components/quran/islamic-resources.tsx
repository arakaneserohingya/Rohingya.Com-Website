import { BookOpen, Headphones, Video, ScrollText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

import { islamicResources as resources } from "@/lib/data/quran"
export function IslamicResources() {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Resources
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground text-balance">
            Islamic Learning Resources
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Deepen your knowledge with a comprehensive collection of Hadith,
            lectures, and Islamic literature available in the Rohingya language.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource) => {
            const IconMap: Record<string, any> = {
              ScrollText, Headphones, Video, BookOpen
            };
            const Icon = IconMap[resource.icon] || BookOpen;

            return (
              <div
                key={resource.title}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md md:flex-row md:items-start"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/20">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {resource.title}
                    </h3>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {resource.type}
                    </span>
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-accent">
                      {resource.count}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary"
                    >
                      Browse
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
