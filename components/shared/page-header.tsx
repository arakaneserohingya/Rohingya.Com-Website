interface PageHeaderProps {
  title: string
  subtitle: string
  badge?: string
}

export function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        {badge && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            {badge}
          </p>
        )}
        <h1 className="mb-4 font-serif text-3xl font-bold text-primary-foreground md:text-5xl text-balance">
          {title}
        </h1>
        <p className="text-lg leading-relaxed text-primary-foreground/80">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
