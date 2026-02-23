import Link from "next/link"
import { Upload, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MusicCTA() {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20">
          <Headphones className="h-8 w-8 text-accent" />
        </div>
        <h2 className="mb-4 font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
          Help Preserve Rohingya Music
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-primary-foreground/70">
          Do you have recordings of traditional Rohingya songs, folk melodies, or oral poetry?
          Contribute to our growing audio archive and help preserve our musical heritage for future generations.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-accent px-8 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/submit">
              <Upload className="mr-2 h-4 w-4" />
              Submit a Recording
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-primary-foreground/20 bg-transparent px-8 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link href="/culture">
              Explore Culture
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
