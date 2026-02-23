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
  Apple, // Import Apple icon
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { apps } from "@/lib/data/apps"

export function AppsGrid() {
  return (
    <section className="bg-background py-16 lg:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <Smartphone className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Featured Apps</h2>
              <p className="text-sm text-muted-foreground">{apps.length} apps available for download</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {apps.map((appData) => {
            return (
              <div
                key={appData.name}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-border/50 bg-card/50 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:bg-card hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Decorative background glow that appears on hover */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-[40px] transition-opacity duration-500 group-hover:opacity-100" />

                <div className="mb-6 flex items-start justify-between relative z-10">
                  <div className="relative">
                    {/* The soft glow behind the icon */}
                    <div className="absolute -inset-2 rounded-3xl bg-primary/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                    {appData.image ? (
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[20px] bg-white shadow-md ring-1 ring-black/5 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:ring-primary/20">
                        <Image
                          src={appData.image}
                          alt={`${appData.name} Icon`}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-[20px] bg-gradient-to-br from-primary/10 to-primary/5 ring-1 ring-border/50 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:ring-primary/20">
                        <Smartphone className="h-10 w-10 text-primary drop-shadow-sm" />
                      </div>
                    )}
                  </div>

                  <span className="inline-flex items-center rounded-full border border-border/40 bg-background/60 px-3 py-1 text-xs font-semibold tracking-wide text-foreground backdrop-blur-md shadow-sm transition-colors group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-primary">
                    {appData.category}
                  </span>
                </div>

                <div className="flex-1 relative z-10">
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground line-clamp-1 transition-colors group-hover:text-primary">
                    {appData.name}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {appData.description}
                  </p>
                </div>

                <div className="mt-auto relative z-10">
                  <div className="mb-5 flex items-center justify-between text-sm font-medium">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Smartphone className="h-4 w-4 opacity-70" />
                      {appData.platform}
                    </span>
                    <div className="flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-amber-600 dark:text-amber-500">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span className="font-bold">{appData.rating}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {/* @ts-ignore */}
                    {appData.playStoreUrl && (
                      <Link
                        /* @ts-ignore */
                        href={appData.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] w-[140px]"
                      >
                        <Image
                          src="/images/google-play-badge.svg"
                          alt="Get it on Google Play"
                          width={140}
                          height={41}
                          className="w-full h-auto drop-shadow-sm"
                        />
                      </Link>
                    )}

                    {/* @ts-ignore */}
                    {appData.appStoreUrl && (
                      <Link
                        /* @ts-ignore */
                        href={appData.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] w-[140px]"
                      >
                        <Image
                          src="/images/app-store-badge.svg"
                          alt="Download on the App Store"
                          width={140}
                          height={41}
                          className="w-full h-auto drop-shadow-sm"
                        />
                      </Link>
                    )}
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
