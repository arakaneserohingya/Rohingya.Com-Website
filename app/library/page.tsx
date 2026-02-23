import type { Metadata } from "next"
import { PageHeader } from "@/components/shared/page-header"
import { LibraryContent } from "@/components/library/library-content"

export const metadata: Metadata = {
  title: "Online Library",
  description:
    "A searchable repository of PDFs, historical documents, and Rohingya literature.",
}

export default function LibraryPage() {
  return (
    <>
      <PageHeader
        title="Online Library"
        subtitle="A searchable repository of PDFs, historical documents, and literature preserving the Rohingya story."
        badge="Knowledge Archive"
      />
      <LibraryContent />
    </>
  )
}
