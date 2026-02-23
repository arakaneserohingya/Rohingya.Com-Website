import {
  Keyboard,
  BookText,
  MessageCircle,
  Radio,
  GraduationCap,
  Calculator,
  Download,
  Star,
  Smartphone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { apps } from "@/lib/data/apps"

export function AppsGrid() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Smartphone className="h-4 w-4" />
          <span>{apps.length} apps available</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((appData) => {
            return (
              <div
                key={appData.name}
                className="group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-border/40 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="mb-6 flex items-start justify-between">
                  {appData.image ? (
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-border/50">
                      <Image
                        src={appData.image}
                        alt={`${appData.name} Icon`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-border/50">
                      <Smartphone className="h-10 w-10 text-primary" />
                    </div>
                  )}
                  <span className="rounded-full bg-secondary/80 px-3 py-1 text-xs font-semibold tracking-wide text-secondary-foreground backdrop-blur-md">
                    {appData.category}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground line-clamp-1">
                    {appData.name}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {appData.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="mb-5 flex items-center justify-between text-sm font-medium">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Smartphone className="h-4 w-4" />
                      {appData.platform}
                    </span>
                    <div className="flex items-center gap-1 text-accent">
                      <Star className="h-4 w-4 fill-accent" />
                      <span>{appData.rating}</span>
                    </div>
                  </div>

                  <Button asChild className="h-12 w-full rounded-xl bg-primary text-primary-foreground font-semibold shadow-md transition-all hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]">
                    <Link href={appData.url} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-5 w-5" />
                      Get on Google Play
                    </Link>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
