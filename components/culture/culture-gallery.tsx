import Image from "next/image"

import { cultureGallery as gallery } from "@/lib/data/culture"

export function CultureGallery() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Visual Heritage
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground text-balance">
            A Glimpse of Rohingya Culture
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Explore the rich visual tapestry of Rohingya life, from traditional
            cuisine and handwoven textiles to village scenes and festive
            celebrations.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {gallery.map((item) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl ${item.span}`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-lg font-bold text-card">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
