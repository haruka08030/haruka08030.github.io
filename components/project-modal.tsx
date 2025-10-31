'use client'

import { Project } from '@/data/projects'
import Image from 'next/image'
import { ExternalLink, Github, X } from 'lucide-react'
import Link from 'next/link'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="max-w-4xl w-full m-4 rounded-lg border border-border bg-white shadow-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col space-y-1.5 p-6 pt-8">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-serif leading-none tracking-tight mt-4">{project.title}</h3>
              <p className="text-sm text-muted">{project.description}</p>
            </div>
            <div className="flex items-center gap-2">
              {project.websiteUrl && (
                <Link href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="p-1 rounded-full hover:bg-muted" title="Visit Website">
                  <ExternalLink className="h-5 w-5" />
                </Link>
              )}
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-1 rounded-full hover:bg-muted" title="View on GitHub">
                <Github className="h-5 w-5" />
              </Link>
              <button onClick={onClose} className="p-1 rounded-full hover:bg-muted">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="p-6 pt-0">
          <div className="relative aspect-[16/9] overflow-hidden rounded border border-border mb-4">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <div key={tag} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground border border-border">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
