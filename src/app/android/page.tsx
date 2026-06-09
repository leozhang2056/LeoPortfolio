import Link from "next/link"
import {
  Smartphone,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Code2,
  Library,
  Wrench,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/lib/data"

const skillCategories = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Kotlin", "Java"],
  },
  {
    category: "UI",
    icon: Smartphone,
    items: ["Jetpack Compose", "XML Layouts", "Material Design 3"],
  },
  {
    category: "Architecture",
    icon: Library,
    items: ["MVVM", "Clean Architecture", "MVI"],
  },
  {
    category: "DI",
    icon: Wrench,
    items: ["Hilt", "Dagger"],
  },
  {
    category: "Data",
    icon: Library,
    items: ["Room", "DataStore", "SQLite"],
  },
  {
    category: "Networking",
    icon: Library,
    items: ["Retrofit", "OkHttp", "Ktor"],
  },
  {
    category: "Async",
    icon: Library,
    items: ["Coroutines", "Flow", "RxJava"],
  },
  {
    category: "Testing",
    icon: CheckCircle2,
    items: ["JUnit", "Mockito", "Espresso", "Compose Testing"],
  },
]

const androidProjects = [
  {
    title: "Enterprise Mobile Suite",
    description:
      "Comprehensive enterprise Android application with offline-first architecture, MVVM, Hilt, Room, and Retrofit integration.",
    tags: ["Kotlin", "MVVM", "Clean Architecture"],
  },
  {
    title: "Industrial IoT Dashboard",
    description:
      "Real-time factory monitoring Android app with MQTT integration and data visualization for industrial environments.",
    tags: ["IoT", "Compose", "MQTT"],
  },
  {
    title: "Field Service App",
    description:
      "Offline-capable field service application for industrial technicians with barcode scanning and asset management.",
    tags: ["Offline-First", "Room", "CameraX"],
  },
]

const androidArticles = [
  {
    title: "MVVM Best Practices in Android",
    description: "Deep dive into MVVM pattern with practical examples",
  },
  {
    title: "Offline-First Architecture with Room",
    description: "Building robust offline-capable Android apps",
  },
  {
    title: "Dependency Injection with Hilt",
    description: "A comprehensive guide to Hilt in modern Android apps",
  },
  {
    title: "Jetpack Compose — From Views to Declarative UI",
    description: "Migration guide and best practices",
  },
]

export default function AndroidPage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Smartphone className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">Android Development</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          {siteConfig.tagline} — over a decade of Android expertise, from Java to Kotlin,
          XML to Jetpack Compose, building enterprise-grade applications with modern architecture patterns.
        </p>
      </div>

      <Separator className="mb-12" />

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Android Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map(({ category, icon: Icon, items }) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-12" />

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Android Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {androidProjects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardContent>
                <Button variant="link" size="xs" className="px-0" render={<a href="#" />}>
                  Architecture Details
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-12" />

      {/* Articles Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Android Articles</h2>
          <Button variant="ghost" render={<Link href="/blog" />}>
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {androidArticles.map((article) => (
            <Card key={article.title}>
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>{article.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" size="xs" className="px-0" render={<a href="#" />}>
                  Read Article
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
