'use client'

import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface ProjectsSectionProps {
  isActive: boolean
}

interface Project {
  slug: string
  title: string
  year: number
  link: string
  content: string
}

export default function ProjectsSection({ isActive }: ProjectsSectionProps) {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then((data: Project[]) => setProjects(data))
      .catch(console.error)
  }, [])
  // Group projects by year
  const projectsByYear = projects.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = []
    }
    acc[project.year].push(project)
    return acc
  }, {} as Record<number, Project[]>)

  return (
    <section id="projects-section" className={isActive ? 'active' : 'inactive'}>
      <h3 id="text19">Personal Projects</h3>
      {Object.keys(projectsByYear)
        .sort((a, b) => parseInt(b) - parseInt(a))
        .map(year => (
          <div key={year}>
            <p id="text12"><strong>{year}</strong></p>
            {projectsByYear[parseInt(year)].map(project => (
              <p key={project.slug} id={`text${project.slug === 'blender-nft-generator' ? '28' : project.slug === 'var-model-crypto' ? '34' : '18'}`}>
                <span className="p">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <code>{project.title}</code>
                  </a><br />
                  <span dangerouslySetInnerHTML={{ __html: project.content }} />
                </span>
              </p>
            ))}
          </div>
        ))}
    </section>
  )
}