import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary">
      {/* Background image with overlay */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Rohingya homeland landscape"
        fill
        className="object-cover opacity-30"
        priority
      />

      {/* Decorative geometric accents */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full border border-accent/10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full border border-accent/10 -translate-x-1/2 translate-y-1/2" />
      <div className="absolute right-20 bottom-32 h-1 w-32 bg-accent/20 hidden lg:block" />
      <div className="absolute left-20 top-40 h-32 w-1 bg-accent/20 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-6 py-32 lg:px-8">
        <div className="max-w-4xl">
          {/* Overline */}
          <div className="animate-fade-in-up mb-8 flex items-center gap-4">
            <div className="h-px w-12 bg-accent" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Preserving Identity. Building Future.
            </p>
          </div>

          {/* Main heading - editorial style large serif */}
          <h1 className="animate-fade-in-up-delay-1 mb-8 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-primary-foreground md:text-7xl lg:text-8xl">
            The Digital Home
            <br />
            <span className="text-accent">of the Rohingya</span>
            <br />
            Diaspora
          </h1>

          {/* Subtext */}
          <p className="animate-fade-in-up-delay-2 mb-12 max-w-xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
            A premier hub for preserving culture, facilitating education, and
            nurturing spiritual connection for Rohingya communities worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up-delay-3 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-accent px-8 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/language">
                Learn Rohingya Language
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-primary-foreground/20 bg-transparent px-8 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/library">Explore Library</Link>
            </Button>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-6 flex items-center gap-4 lg:left-8">
          <div className="flex h-12 w-8 items-start justify-center rounded-full border border-primary-foreground/20 pt-2">
            <div className="h-2 w-0.5 animate-bounce rounded-full bg-primary-foreground/60" />
          </div>
          <span className="text-xs uppercase tracking-widest text-primary-foreground/40">
            Scroll
          </span>
        </div>
      </div>
    </section>
  )
}
