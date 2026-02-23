import type { Metadata } from "next"
import { PageHeader } from "@/components/shared/page-header"
import { PhonicsSection } from "@/components/language/phonics-section"
import { PhrasesSection } from "@/components/language/phrases-section"
import { ScriptShowcase } from "@/components/language/script-showcase"

export const metadata: Metadata = {
  title: "Language Portal",
  description:
    "Learn the Rohingya language with interactive phonics, common phrases, and video tutorials.",
}

export default function LanguagePage() {
  return (
    <>
      <PageHeader
        title="Learn Rohingya"
        subtitle="Begin your journey with the Rohingya language. Explore phonics, common phrases, and discover the beautiful Hanifi script."
        badge="Language Portal"
      />
      <ScriptShowcase />
      <PhonicsSection />
      <PhrasesSection />
    </>
  )
}
