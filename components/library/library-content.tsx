"use client"

import { useState } from "react"
import {
  Search,
  FileText,
  BookOpen,
  Scroll,
  Filter,
  Download,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const categories = [
  "All",
  "History",
  "Language",
  "Religion",
  "Culture",
  "Human Rights",
  "Education",
]

import { documents } from "@/lib/data/library"

export function LibraryContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredDocs = documents.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      activeCategory === "All" || doc.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Search and filter */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search documents, authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="mb-6 text-sm text-muted-foreground">
          Showing {filteredDocs.length} of {documents.length} documents
        </p>

        {/* Document cards */}
        <div className="grid gap-4">
          {filteredDocs.map((doc) => {
            const IconMap: Record<string, any> = {
              BookOpen, FileText, Scroll
            };
            const Icon = IconMap[doc.icon] || FileText;

            return (
              <div
                key={doc.title}
                className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md md:flex-row md:items-center"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-foreground">{doc.title}</h3>
                    <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-medium text-accent">
                      {doc.category}
                    </span>
                  </div>
                  <p className="mb-1 text-sm text-muted-foreground">
                    {doc.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    By {doc.author} &middot; {doc.pages} pages &middot;{" "}
                    {doc.type}
                  </p>
                </div>

                <div className="flex gap-2 md:shrink-0">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-1.5 h-4 w-4" />
                    Preview
                  </Button>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Download className="mr-1.5 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            )
          })}

          {filteredDocs.length === 0 && (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center">
              <Search className="mb-4 h-10 w-10 text-muted-foreground/50" />
              <p className="text-lg font-semibold text-foreground">
                No documents found
              </p>
              <p className="text-sm text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
