import { Clock, Sun, Sunset, Moon, CloudSun } from "lucide-react"

import { dailyPrayers as prayers } from "@/lib/data/quran"
export function PrayerSection() {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Salah Times
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-primary-foreground text-balance">
            Daily Prayer Times
          </h2>
          <p className="mx-auto max-w-lg text-primary-foreground/70">
            Stay connected to your daily prayers. Times shown are approximate
            and based on your local timezone.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {prayers.map((prayer) => {
            const IconMap: Record<string, any> = {
              Moon, Sun, CloudSun, Sunset
            };
            const Icon = IconMap[prayer.icon] || Moon;

            return (
              <div
                key={prayer.name}
                className="flex w-40 flex-col items-center gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur"
              >
                <Icon className="h-8 w-8 text-accent" />
                <div className="text-center">
                  <p className="font-bold text-primary-foreground">
                    {prayer.name}
                  </p>
                  <p className="text-xs text-primary-foreground/60">
                    {prayer.description}
                  </p>
                </div>
                <p className="text-lg font-bold text-accent">{prayer.time}</p>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs text-primary-foreground/50">
          <Clock className="mr-1 inline-block h-3 w-3" />
          Prayer times are approximations. Please verify with your local mosque.
        </p>
      </div>
    </section>
  )
}
