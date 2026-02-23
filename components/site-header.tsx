"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BookOpen,
  Globe,
  Smartphone,
  BookMarked,
  Landmark,
  Music,
  Menu,
  X,
  Upload,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    title: "Apps",
    href: "/apps",
    icon: Smartphone,
    description: "Keyboards, dictionaries & tools",
  },
  {
    title: "Library",
    href: "/library",
    icon: BookOpen,
    description: "PDFs, documents & literature",
  },
  {
    title: "Language",
    href: "/language",
    icon: Globe,
    description: "Learn Rohingya phonics & script",
  },
  {
    title: "Quran",
    href: "/quran",
    icon: BookMarked,
    description: "Translations & Islamic resources",
  },
  {
    title: "Culture",
    href: "/culture",
    icon: Landmark,
    description: "Heritage, traditions & stories",
  },
  {
    title: "Music",
    href: "/music",
    icon: Music,
    description: "Traditional songs & audio archives",
  },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="font-serif text-base font-bold text-primary-foreground">
              R
            </span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight text-foreground">
              ROHINGYA
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-muted-foreground">
              digital home
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="hidden rounded-full bg-primary px-5 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 sm:inline-flex"
          >
            <Link href="/submit">
              <Upload className="mr-2 h-3.5 w-3.5" />
              Contribute
            </Link>
          </Button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-background px-6 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="group flex items-center justify-between rounded-xl px-4 py-3.5 transition-colors hover:bg-secondary"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
            <div className="mt-4 px-4">
              <Button
                asChild
                className="w-full rounded-full bg-primary text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/submit" onClick={() => setMobileOpen(false)}>
                  <Upload className="mr-2 h-3.5 w-3.5" />
                  Contribute Content
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
