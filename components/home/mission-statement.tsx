import Image from "next/image"
import { Heart, Users, BookOpen, Shield } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Cultural Preservation",
    description:
      "Safeguarding the rich heritage, traditions, and identity for future generations.",
  },
  {
    icon: Users,
    title: "Community Unity",
    description:
      "Connecting Rohingya communities across the globe through shared digital tools.",
  },
  {
    icon: BookOpen,
    title: "Education Access",
    description:
      "Free educational materials, language learning, and spiritual resources for all.",
  },
  {
    icon: Shield,
    title: "Digital Empowerment",
    description:
      "Building technology to amplify Rohingya voices and preserve collective memory.",
  },
]

export function MissionStatement() {
  return (
    <section className="bg-background py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left side - Image collage */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/culture-heritage.jpg"
                alt="Rohingya cultural heritage"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-border bg-card p-6 shadow-2xl lg:-right-12">
              <p className="font-serif text-3xl font-bold text-primary">15+</p>
              <p className="text-sm font-medium text-muted-foreground">
                Countries Reached
              </p>
            </div>
            {/* Decorative */}
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl border-2 border-accent/20" />
          </div>

          {/* Right side - Text + values */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-accent" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Our Mission
              </p>
            </div>
            <h2 className="mb-6 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Dignity, Hope, and
              <br />
              Cultural Pride
            </h2>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground">
              ROHINGYA.com is more than a website. It is a digital sanctuary
              where the Rohingya community can preserve their identity, share
              their knowledge, and build bridges across continents.
            </p>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              From language preservation to spiritual resources, every feature
              is designed with one purpose: empowering the Rohingya people to
              thrive, no matter where they call home.
            </p>

            {/* Values grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-md"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 transition-colors group-hover:bg-accent/15">
                    <value.icon className="h-5 w-5 text-primary transition-colors group-hover:text-accent" />
                  </div>
                  <h3 className="mb-1 text-sm font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
