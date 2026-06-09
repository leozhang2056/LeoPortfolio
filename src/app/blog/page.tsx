"use client"

import { useState } from "react"
import Link from "next/link"
import { PenLine, Search, Calendar, Clock, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const posts = [
  {
    title: "MVVM Best Practices in Android",
    excerpt: "Deep dive into the MVVM architectural pattern with practical examples from production Android applications.",
    category: "Android",
    tags: ["MVVM", "Kotlin", "Android", "Architecture"],
    date: "2025-03-15",
    readTime: "8 min read",
    slug: "mvvm-best-practices",
  },
  {
    title: "Offline-First Architecture with Room",
    excerpt: "Building robust offline-capable Android applications using Room database and reactive programming patterns.",
    category: "Android",
    tags: ["Room", "Offline-First", "Kotlin", "Architecture"],
    date: "2025-02-28",
    readTime: "10 min read",
    slug: "offline-first-with-room",
  },
  {
    title: "Dependency Injection with Hilt",
    excerpt: "A comprehensive guide to dependency injection in modern Android apps using Hilt.",
    category: "Android",
    tags: ["Hilt", "DI", "Android", "Kotlin"],
    date: "2025-01-20",
    readTime: "7 min read",
    slug: "hilt-dependency-injection",
  },
  {
    title: "Building Multimodal AI Systems",
    excerpt: "Lessons learned from building the ChatClothes system combining computer vision and natural language processing.",
    category: "AI",
    tags: ["AI", "Computer Vision", "LLM", "Multimodal"],
    date: "2025-02-10",
    readTime: "12 min read",
    slug: "multimodal-ai-systems",
  },
  {
    title: "Microservices in Practice",
    excerpt: "Real-world patterns for designing, deploying, and maintaining microservices in production environments.",
    category: "Software Engineering",
    tags: ["Microservices", "Spring Boot", "Docker", "Kubernetes"],
    date: "2025-01-05",
    readTime: "15 min read",
    slug: "microservices-in-practice",
  },
  {
    title: "CI/CD Pipeline Design",
    excerpt: "Designing effective CI/CD pipelines for monorepo projects with multiple services.",
    category: "DevOps",
    tags: ["CI/CD", "GitHub Actions", "Docker", "DevOps"],
    date: "2024-12-20",
    readTime: "9 min read",
    slug: "cicd-pipeline-design",
  },
]

const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <PenLine className="h-7 w-7 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Thoughts on Android development, AI engineering, software architecture, and career growth.
        </p>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-8 max-w-md"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            size="xs"
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <Separator className="mb-10" />

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted-foreground">No posts found matching your search.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <Card key={post.slug} className="flex flex-col">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-1">
                  {post.category}
                </Badge>
                <CardTitle>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-3">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-1"
                >
                  Read more
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
