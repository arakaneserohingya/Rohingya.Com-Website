import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Globe, Smartphone, BookMarked, Landmark, Music } from "lucide-react"

import { pillars } from "@/lib/data/home"

export function PillarCards() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <div className="h-px w-12 bg-accent" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Our Five Pillars
              </p>
            </div>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Everything the Rohingya
              <br className="hidden md:block" />
              Community Needs
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            From language preservation to spiritual resources, explore our
            comprehensive platform built for the Rohingya diaspora.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
          {pillars.map((pillarData) => {
            // Need to map the string icon to the actual lucide component
            const IconMap: Record<string, any> = {
              Smartphone, BookOpen, Globe, BookMarked, Landmark, Music
            };
            const Icon = IconMap[pillarData.icon] || Globe;

            return (
              <Link
                key={pillarData.href}
                href={pillarData.href}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5 ${pillarData.span}`}
              >
                {pillarData.featured ? (
                  /* Featured card - large left column */
                  <>
                    <div className="relative flex-1 overflow-hidden">
                      <Image
                        src={pillarData.image}
                        alt={pillarData.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/50" />
                      {/* Content overlaid on image for featured */}
                      <div className="absolute inset-0 flex flex-col justify-end p-8">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/90 shadow-lg">
                          <Icon className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <h3 className="mb-2 font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
                          {pillarData.title}
                        </h3>
                        <p className="mb-6 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
                          {pillarData.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                          <span>Explore</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Standard card */
                  <>
                    <div className={`relative ${pillarData.imageHeight} overflow-hidden`}>
                      <Image
                        src={pillarData.image}
                        alt={pillarData.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/20" />
                      <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-card/90 shadow-sm backdrop-blur-sm">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <h3 className="mb-1.5 text-lg font-bold text-foreground">
                          {pillarData.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {pillarData.description}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
                        <span>Explore</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                      </div>
                    </div>
                  </>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
