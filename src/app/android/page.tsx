import Link from "next/link"
import {
  Smartphone,
  Code2,
  Layout,
  Layers,
  Cable,
  Database,
  Network,
  Activity,
  Shield,
  Bug,
  TestTube,
  ArrowRight,
  Building2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const skills = [
  { category: "Languages", icon: Code2, items: ["Kotlin", "Java"] },
  { category: "UI", icon: Layout, items: ["Jetpack Compose", "Material Design 3", "XML Layouts"] },
  { category: "Architecture", icon: Layers, items: ["MVVM", "Clean Architecture", "MVI", "SOLID"] },
  { category: "DI", icon: Cable, items: ["Hilt", "Dagger"] },
  { category: "Data", icon: Database, items: ["Room", "SQLite", "DataStore"] },
  { category: "Networking", icon: Network, items: ["Retrofit", "OkHttp", "WebSocket"] },
  { category: "Async", icon: Activity, items: ["Coroutines", "Flow", "RxJava"] },
  { category: "System", icon: Shield, items: ["NDK/JNI (TCP/UDP)", "Android Security", "Reverse Engineering (JADX, Xposed)"] },
  { category: "Testing", icon: TestTube, items: ["JUnit", "MockK", "Espresso", "Compose Testing"] },
]

const projects = [
  {
    title: "Enterprise Messaging Platform",
    description:
      "Enterprise IM serving 5,000 DAU with sub-200ms latency. NDK TCP/UDP transport for real-time messaging. 10-year lifecycle product built with Kotlin/Java, MVVM, Coroutines.",
    tags: ["NDK", "TCP/UDP", "Real-time", "Kotlin", "Coroutines"],
  },
  {
    title: "Smart Factory Shop-Floor App",
    description:
      "Android terminals for garment factory workers. RFID integration, barcode scanning, and production task management. Deployed across 10+ factory sites.",
    tags: ["RFID", "IoT", "Jetpack Compose", "MVVM"],
  },
  {
    title: "Forest Patrol Inspection",
    description:
      "Offline-first Android GIS app for forest rangers. GPS tracking, offline maps, fire/pest reporting with deferred sync.",
    tags: ["Offline-First", "GIS", "GPS", "SQLite"],
  },
  {
    title: "Live Streaming Commerce",
    description:
      "Android live-streaming client with custom C++ streaming core. Multi-bitrate support (360p-1080p), WebRTC, RTMP.",
    tags: ["NDK", "Streaming", "WebRTC", "RTMP"],
  },
  {
    title: "Picture Book Locker",
    description:
      "Smart library locker control Android app. Face recognition, QR scanning, electromagnetic lock control.",
    tags: ["IoT", "Face Recognition", "Embedded"],
  },
  {
    title: "Boobit Crypto Trading",
    description:
      "Cryptocurrency trading app with real-time market data via WebSocket. MVVM Clean Architecture with Jetpack Compose.",
    tags: ["Fintech", "WebSocket", "Compose", "MVVM"],
  },
]

const achievements = [
  {
    icon: Smartphone,
    title: "8+ Production Apps",
    description: "Shipped eight production Android applications across diverse domains — enterprise IM, IoT, fintech, live streaming, and more.",
  },
  {
    icon: Layers,
    title: "50%+ Code Duplication Reduction",
    description: "Architecture reused across 12+ internal projects, dramatically reducing boilerplate and maintenance overhead.",
  },
  {
    icon: Bug,
    title: "OOM Crash Reduction",
    description: "Memory profiling and optimization that significantly reduced out-of-memory crashes in resource-constrained environments.",
  },
  {
    icon: Activity,
    title: "Sub-200ms Real-Time Messaging",
    description: "NDK-level TCP/UDP transport layer enabling sub-200ms latency for real-time enterprise messaging at scale.",
  },
  {
    icon: Layout,
    title: "MVVM + Compose Adoption",
    description: "Drove adoption of MVVM architecture and Jetpack Compose across the organization's Android projects.",
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
          Senior Android Engineer with 10+ years of experience at Chunxiao Technology (2013–2024).
          From Java to Kotlin, XML to Jetpack Compose — building enterprise-grade Android applications
          with modern architecture patterns and native performance.
        </p>
      </div>

      <Separator className="mb-12" />

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Android Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ category, icon: Icon, items }) => (
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

      {/* Key Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Key Achievements</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Icon className="h-4 w-4 text-primary" />
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-12" />

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Android Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-12" />

      {/* Experience CTA */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          <Button variant="ghost" render={<Link href="/resume" />}>
            View Full Resume <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Chunxiao Technology — Senior Android Engineer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">2013 – 2024 · 11 years</p>
            <p className="text-sm text-muted-foreground">
              Led Android development for enterprise messaging, IoT, fintech, and live streaming products.
              Championed MVVM architecture and Jetpack Compose adoption. Built NDK-level TCP/UDP transport
              for sub-200ms real-time communication.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
