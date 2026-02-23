"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 3500000, label: "Rohingya people worldwide", suffix: "+" },
  { value: 200, label: "Digital resources available", suffix: "+" },
  { value: 28, label: "Quranic Surahs translated", suffix: "" },
  { value: 15, label: "Countries reached", suffix: "+" },
]

function useCountUp(end: number, duration: number, shouldStart: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return
    let startTime: number | null = null
    let rafId: number

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [end, duration, shouldStart])

  return count
}

function formatNumber(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M"
  if (n >= 1000) return (n / 1000).toFixed(0) + "K"
  return n.toString()
}

function StatItem({ stat }: { stat: (typeof stats)[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const count = useCountUp(stat.value, 2000, visible)

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="font-serif text-5xl font-bold text-primary md:text-6xl lg:text-7xl">
        {formatNumber(count)}
        {stat.suffix}
      </span>
      <span className="mt-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {stat.label}
      </span>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
