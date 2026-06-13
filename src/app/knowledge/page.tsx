import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, Code, Globe, Lightbulb } from "lucide-react";
import { KNOWLEDGE_BASE } from "@/lib/knowledge-base";

export default function KnowledgePage() {
  const { personal, summary, education, experience, skills, projects, publications, awards } = KNOWLEDGE_BASE;

  return (
    <main className="min-h-screen container mx-auto max-w-6xl px-4 py-16">
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <BookOpen className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">Knowledge Base</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Complete information about Leo&apos;s career, skills, and projects
        </p>
      </div>

      {/* Personal Info */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><strong>Name:</strong> {personal.name}</p>
              <p><strong>Email:</strong> {personal.email}</p>
              <p><strong>Phone:</strong> {personal.phone}</p>
            </div>
            <div>
              <p><strong>Location:</strong> {personal.location}</p>
              <p><strong>Visa:</strong> {personal.visa}</p>
              <p><strong>LinkedIn:</strong> <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{personal.linkedin}</a></p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Summary */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Professional Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Core Profile</h4>
              <p className="text-muted-foreground">{summary.core}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Android Focus</h4>
                <p className="text-sm text-muted-foreground">{summary.android}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">AI Focus</h4>
                <p className="text-sm text-muted-foreground">{summary.ai}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Java Focus</h4>
                <p className="text-sm text-muted-foreground">{summary.java}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Technical Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h4 className="font-semibold mb-3 capitalize">{category.replace('_', ' ')}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {typeof skill === 'string' ? skill : `${skill.name} (${skill.level})`}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Projects */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Featured Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="border-l-4 border-primary/20 pl-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold">{project.name}</h4>
                  <Badge variant="outline">{project.type}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{project.summary}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.techStack.map((tech, j) => (
                    <Badge key={j} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.metrics && (
                  <p className="text-xs text-muted-foreground">
                    <strong>Metrics:</strong>{' '}
                    {typeof project.metrics === 'string'
                      ? project.metrics
                      : Object.entries(project.metrics).map(([k, v]) => `${k}: ${v}`).join(', ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Education & Experience */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i}>
                  <h4 className="font-semibold">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground">{edu.institution} — {edu.period}</p>
                  {edu.honors && <p className="text-xs text-primary">{edu.honors}</p>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Work Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {experience.map((exp, i) => (
                <div key={i}>
                  <h4 className="font-semibold">{exp.role}</h4>
                  <p className="text-sm text-muted-foreground">{exp.company} — {exp.period}</p>
                  <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                    {exp.achievements.slice(0, 2).map((achievement, j) => (
                      <li key={j}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Publications & Awards */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Publications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {publications.map((pub, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-sm">{pub.title}</h4>
                  <p className="text-xs text-muted-foreground">{pub.venue} — {pub.year}</p>
                  {pub.doi && <p className="text-xs text-primary">DOI: {pub.doi}</p>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Awards & Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {awards.map((award, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-sm">{award.name}</h4>
                  <p className="text-xs text-muted-foreground">{award.authority} — {award.year}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}