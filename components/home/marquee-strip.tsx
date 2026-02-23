const items = [
  "Language Preservation",
  "Cultural Heritage",
  "Digital Empowerment",
  "Quranic Studies",
  "Community Tools",
  "Education Access",
  "Identity & Pride",
  "Global Connection",
]

export function MarqueeStrip() {
  return (
    <section className="overflow-hidden border-y border-border bg-secondary py-5">
      <div className="animate-marquee flex w-max items-center gap-8">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em] text-foreground/80">
              {item}
            </span>
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              className="text-accent"
              fill="currentColor"
            >
              <path d="M4 0L4.89806 2.76393L7.80423 2.76393L5.45308 4.47214L6.35114 7.23607L4 5.52786L1.64886 7.23607L2.54692 4.47214L0.195774 2.76393L3.10194 2.76393L4 0Z" />
            </svg>
          </div>
        ))}
      </div>
    </section>
  )
}
