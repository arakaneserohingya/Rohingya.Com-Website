import type { Metadata } from "next"
import { PageHeader } from "@/components/shared/page-header"
import { QuranTranslations } from "@/components/quran/quran-translations"
import { PrayerSection } from "@/components/quran/prayer-section"
import { IslamicResources } from "@/components/quran/islamic-resources"

export const metadata: Metadata = {
  title: "Quran & Islamic Content",
  description:
    "Explore digitized Quranic translations in Rohingya, prayer times, Hadith resources, and Islamic lectures.",
}

export default function QuranPage() {
  return (
    <>
      <PageHeader
        title="Quran & Islamic Content"
        subtitle="A dedicated spiritual wing featuring digitized Quranic translations in the Rohingya language, prayer resources, and Islamic scholarship."
        badge="Spiritual Resources"
      />
      <QuranTranslations />
      <PrayerSection />
      <IslamicResources />
    </>
  )
}
