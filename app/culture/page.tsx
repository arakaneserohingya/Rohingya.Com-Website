import type { Metadata } from "next"
import { PageHeader } from "@/components/shared/page-header"
import { CultureGallery } from "@/components/culture/culture-gallery"
import { CultureBlog } from "@/components/culture/culture-blog"
import { HistoryTimeline } from "@/components/culture/history-timeline"

export const metadata: Metadata = {
  title: "Cultural Heritage",
  description:
    "Celebrate Rohingya history, traditional clothing, food, music, and community stories.",
}

export default function CulturePage() {
  return (
    <>
      <PageHeader
        title="Cultural Heritage"
        subtitle="Celebrating the rich heritage of the Rohingya people through history, traditions, food, music, and the stories that bind our community."
        badge="Our Heritage"
      />
      <CultureGallery />
      <HistoryTimeline />
      <CultureBlog />
    </>
  )
}
