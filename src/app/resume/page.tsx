import Link from "next/link"
import { Download, FileText, Smartphone, Server, Brain, Briefcase, MapPin, Mail, Award } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const personalInfo = {
  name: "Yuchao Zhang (Leo Zhang)",
  email: "leozhang2056@gmail.com",
  phone: "+64 27 385 0794",
  location: "Auckland, New Zealand",
}

const resumes = [
  {
    title: "Android Developer",
    icon: Smartphone,
    focus: "Kotlin, Jetpack Compose, MVVM, Hilt, NDK, Android SDK",
    highlights: [
      "10+ years of Android development experience across consumer and enterprise domains",
      "8+ apps shipped on Google Play and enterprise markets",
      "NDK TCP/UDP sockets achieving sub-200ms real-time messaging for industrial IoT",
      "MVVM + Clean Architecture applied consistently across 12+ Android projects",
    ],
  },
  {
    title: "Backend / Full-Stack Engineer",
    icon: Server,
    focus: "Spring Cloud, Java, Microservices, MySQL, Redis, Docker",
    highlights: [
      "Smart factory solution deployed across 10+ manufacturing sites, improving efficiency by 30%+",
      "Enterprise instant messaging platform serving 5K+ daily active users",
      "Spring Cloud microservices with event-driven architecture and distributed transactions",
      "Full-stack delivery from embedded terminal firmware to cloud management dashboards",
    ],
  },
  {
    title: "AI Engineer",
    icon: Brain,
    focus: "PyTorch, OpenCV, YOLO, Diffusion Models, LLM, Computer Vision",
    highlights: [
      "ChatClothes thesis accepted at IVCNZ 2025 — virtual try-on with multimodal AI",
      "Custom YOLO12n-LC model achieving 94.2% mAP on embedded industrial datasets",
      "Deployed real-time object detection on Raspberry Pi with <100ms inference latency",
      "LoRA fine-tuning of diffusion models for domain-specific image generation tasks",
    ],
  },
]

const coreCompetencies = [
  "Kotlin", "Java", "Spring Cloud", "Python", "TypeScript",
  "Jetpack Compose", "Vue.js", "React", "MVVM", "Clean Architecture",
  "Microservices", "MySQL", "Redis", "MongoDB", "Docker",
  "Kubernetes", "Jenkins", "CI/CD", "PyTorch", "YOLO",
  "OpenCV", "Diffusion Models", "NDK", "RFID", "MQTT",
  "Linux", "Azure", "Git",
]

export default function ResumePage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">Resume</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Download tailored resumes for different roles. Each version highlights
          relevant experience and skills.
        </p>
      </div>

      <Separator className="mb-12" />

      {/* Resume Cards */}
      <section className="mb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {resumes.map(({ title, icon: Icon, focus, highlights }) => (
            <Card key={title} className="flex flex-col">
              <CardHeader>
                <Icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">{title} Resume</CardTitle>
                <CardDescription className="text-xs text-muted-foreground">
                  Focus: {focus}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardContent>
                <Button variant="outline" className="w-full" render={<a href="#" />}>
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-12" />

      {/* Full Resume */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Full Resume</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Comprehensive Overview
            </CardTitle>
            <CardDescription>
              A complete summary of experience, skills, and qualifications.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Personal Info */}
            <div>
              <h3 className="text-base font-semibold mb-3">{personalInfo.name}</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="h-4 w-4" />
                  {personalInfo.email}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Smartphone className="h-4 w-4" />
                  {personalInfo.phone}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {personalInfo.location}
                </span>
              </div>
            </div>

            <Separator />

            {/* Professional Summary */}
            <div>
              <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider text-muted-foreground">
                Professional Summary
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Senior software engineer with 10+ years of experience delivering mobile
                and IoT solutions across industrial and enterprise environments.
                Experienced in leading cross-functional development, improving system
                reliability, and collaborating with product, QA, and operations teams.
                Strong background in Android architecture, real-time systems, and applied
                AI, with a Master&apos;s degree in Computer and Information Sciences from
                AUT (First Class Honours).
              </p>
            </div>

            <Separator />

            {/* Core Competencies */}
            <div>
              <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider text-muted-foreground">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {coreCompetencies.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            {/* Experience / Education / Certifications */}
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Briefcase className="h-4 w-4" />
                  Experience
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">AI Research Engineer</p>
                    <p>AUT — 2024–2026</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Full-stack Engineer</p>
                    <p>Chunxiao Technology — 2013–2024</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Award className="h-4 w-4" />
                  Education
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">Master of Computer and Information Sciences</p>
                    <p>AUT — 2026 (First Class Honours)</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Bachelor of Software Engineering</p>
                    <p>Hebei University of Science and Technology — 2013 (National Scholarship)</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <FileText className="h-4 w-4" />
                  Certifications
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">Software Design Engineer Certificate</p>
                    <p>2019</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">IoT Fundamentals</p>
                    <p>2020</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="mb-12" />

      {/* Contact CTA */}
      <section className="text-center">
        <div className="max-w-lg mx-auto space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Need a customized resume?
          </h2>
          <p className="text-muted-foreground">
            Reach out and I&apos;ll tailor a resume to match your opportunity.
          </p>
          <Button render={<Link href="/contact" />}>Get in Touch</Button>
        </div>
      </section>
    </main>
  )
}
