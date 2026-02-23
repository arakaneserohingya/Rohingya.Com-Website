import type { Metadata } from "next"
import { PageHeader } from "@/components/shared/page-header"
import { AppsGrid } from "@/components/apps/apps-grid"

export const metadata: Metadata = {
  title: "Rohingya Apps",
  description:
    "Discover mobile applications, keyboards, dictionaries, and community tools built for Rohingya speakers.",
}

export default function AppsPage() {
  return (
    <>
      <PageHeader
        title="Rohingya Apps"
        subtitle="Discover keyboards, dictionaries, and community tools built for Rohingya speakers around the world."
        badge="Mobile Tools"
      />
      <AppsGrid />
    </>
  )
}
