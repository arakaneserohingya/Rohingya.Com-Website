import Link from "next/link"

const footerSections = [
  {
    title: "Resources",
    links: [
      { label: "Rohingya Apps", href: "/apps" },
      { label: "Online Library", href: "/library" },
      { label: "Language Portal", href: "/language" },
      { label: "Rohingya Music", href: "/music" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Quran & Islamic", href: "/quran" },
      { label: "Cultural Heritage", href: "/culture" },
      { label: "Submit Content", href: "/submit" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Mission", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        {/* Top section */}
        <div className="mb-16 flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                <span className="font-serif text-base font-bold text-accent-foreground">
                  R
                </span>
              </div>
              <span className="text-base font-bold tracking-tight">
                ROHINGYA.com
              </span>
            </div>
            <p className="text-sm leading-relaxed text-background/60">
              The digital home of the Rohingya diaspora. Preserving culture,
              facilitating education, and providing spiritual resources for our
              community worldwide.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-background/50 transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} ROHINGYA.com. All rights
            reserved.
          </p>
          <p className="text-xs text-background/40">
            Built with dignity, hope, and cultural pride.
          </p>
        </div>
      </div>
    </footer>
  )
}
