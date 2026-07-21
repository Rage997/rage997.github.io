'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomeSection from '@/components/HomeSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import ThesisSection from '@/components/ThesisSection'
import BlogSection from '@/components/BlogSection'
import type { PostMeta } from '@/lib/posts'

export default function HomeClient({ posts }: { posts: PostMeta[] }) {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Handle initial loading animation
    setTimeout(() => {
      setIsLoading(false)
      setIsPlaying(true)
      setTimeout(() => {
        setIsReady(true)
      }, 1000)
    }, 100)
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home'
      const section = hash.split('/')[0] // Handle blog/article-slug format
      setActiveSection(section)
    }

    // Set initial section
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const getBodyClass = () => {
    let classes = ''
    if (isLoading) classes += 'is-loading '
    if (isPlaying) classes += 'is-playing '
    if (isReady) classes += 'is-ready '
    return classes.trim()
  }

  return (
    <body className={getBodyClass()}>

      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <Header />
            <HomeSection isActive={activeSection === 'home'} />
            <AboutSection isActive={activeSection === 'about'} />
            <ProjectsSection isActive={activeSection === 'projects'} />
            <ThesisSection isActive={activeSection === 'thesis'} />
            <BlogSection isActive={activeSection === 'blog'} articles={posts} />
            <Footer />
          </div>
        </div>
      </div>
    </body>
  )
}