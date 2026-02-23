import Link from "next/link"
import { Upload, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CommunityBanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full border border-primary-foreground/5 -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full border border-primary-foreground/5 translate-x-1/3 translate-y-1/3" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-foreground/3" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-accent" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Join the Movement
          </p>
          <div className="h-px w-12 bg-accent" />
        </div>
        <h2 className="mb-6 font-serif text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
          Help Us Preserve
          <br />
          Our Heritage
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
          Do you have documents, stories, photos, or resources about Rohingya
          culture? Contribute to our growing digital archive and help future
          generations stay connected to their roots.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-accent px-8 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/submit">
              <Upload className="mr-2 h-4 w-4" />
              Submit Content
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 rounded-full border-primary-foreground/20 bg-transparent px-8 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link href="/culture">
              Browse Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
