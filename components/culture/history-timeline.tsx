import { historyTimeline as timeline } from "@/lib/data/culture"

export function HistoryTimeline() {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Our Story
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground text-balance">
            A Brief History of the Rohingya
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="flex flex-col gap-8">
            {timeline.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex flex-col gap-4 md:flex-row md:items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-4 top-2 hidden h-3 w-3 rounded-full bg-primary md:left-1/2 md:block md:-translate-x-1/2" />

                <div
                  className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                >
                  <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <span className="mb-2 inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent">
                      {event.year}
                    </span>
                    <h3 className="mb-2 font-bold text-foreground">
                      {event.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
