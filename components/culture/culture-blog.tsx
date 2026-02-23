import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { cultureBlogPosts as blogPosts } from "@/lib/data/culture"

export function CultureBlog() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Stories & Articles
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            Community Stories
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Read stories, articles, and reflections from community members
            preserving and celebrating Rohingya cultural heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.title}
              className="overflow-hidden border-border hover:shadow-lg transition-shadow"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-primary text-primary-foreground">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button
                  variant="ghost"
                  className="text-primary hover:text-accent p-0"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
