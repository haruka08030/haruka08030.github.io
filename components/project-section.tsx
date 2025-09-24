'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Project } from '@/data/projects'
import ProjectModal from '@/components/project-modal'

interface ProjectSectionProps {
  projects: Project[]
  dictionary: any
}

export default function ProjectSection({ projects, dictionary }: ProjectSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="container mt-20 md:mt-28">
      <div className="mb-8 md:mb-10">
        <h2 className="font-serif text-3xl md:text-4xl">{dictionary.title}</h2>
        <p className="text-muted mt-2">{dictionary.description}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} onClick={() => setSelectedProject(project)} className="cursor-pointer">
            <CardHeader>
              <CardTitle className="font-serif">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-[4/3] overflow-hidden rounded border border-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <div
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
