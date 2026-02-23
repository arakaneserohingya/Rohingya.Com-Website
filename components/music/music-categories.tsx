import { Music2, Mic, Baby, Flag, BookOpen, Heart } from "lucide-react"
import Link from "next/link"

import { musicCategories as categories } from "@/lib/data/music"
export function MusicCategories() {
  return (
    <section className="border-t border-border bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <div className="h-px w-12 bg-accent" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Browse by Genre
              </p>
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Explore Music Categories
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Discover the rich diversity of Rohingya musical traditions, from soulful folk songs to devotional nasheeds.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const IconMap: Record<string, any> = {
              Music2, BookOpen, Baby, Flag, Heart, Mic
            };
            const Icon = IconMap[cat.icon] || Music2;

            return (
              <Link
                key={cat.title}
                href="/music"
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${cat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="text-base font-bold text-foreground">{cat.title}</h3>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                      {cat.count}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
