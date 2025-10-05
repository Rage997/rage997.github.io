'use client'

import { useState, useEffect } from 'react'

interface BlogSectionProps {
  isActive: boolean
}

interface BlogArticle {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: string
}

const blogArticles: BlogArticle[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    date: "2024-12-15",
    excerpt: "A comprehensive guide to building modern web applications with Next.js, covering the fundamentals and best practices.",
    tags: ["React", "Next.js", "JavaScript"],
    content: `
      <p>Next.js is a powerful React framework that makes building modern web applications easier and more efficient. In this article, we'll explore the key features and concepts that make Next.js a great choice for your next project.</p>

      <h2>Why Next.js?</h2>
      <p>Next.js provides several advantages over traditional React applications:</p>
      <ul>
        <li><strong>Server-Side Rendering (SSR)</strong>: Better SEO and initial page load performance</li>
        <li><strong>Static Site Generation (SSG)</strong>: Pre-built pages for optimal performance</li>
        <li><strong>API Routes</strong>: Built-in backend functionality</li>
        <li><strong>File-based Routing</strong>: Intuitive page structure</li>
      </ul>

      <h2>Getting Started</h2>
      <p>To create a new Next.js project, run:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>

      <p>This will set up a new Next.js project with all the necessary dependencies and configuration files.</p>

      <h2>Basic Project Structure</h2>
      <p>A typical Next.js project structure looks like this:</p>
      <pre><code>my-app/
├── app/           # App Router directory
├── components/    # Reusable components
├── public/        # Static assets
└── package.json</code></pre>

      <p>The <code>app</code> directory contains your pages and layouts, while <code>components</code> holds reusable UI elements.</p>
    `
  },
  {
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques for 2024",
    date: "2024-11-20",
    excerpt: "Explore the latest CSS features and techniques that are shaping modern web development, from container queries to new layout methods.",
    tags: ["CSS", "Web Development", "Frontend"],
    content: `
      <p>CSS has evolved significantly in recent years, with new features that make creating responsive, maintainable stylesheets easier than ever. Let's explore some of the most exciting modern CSS techniques.</p>

      <h2>Container Queries</h2>
      <p>Container queries allow you to style elements based on their container's size, rather than the viewport. This is a game-changer for component-based design.</p>

      <pre><code>.card-container {
        container-type: inline-size;
      }

      @container (min-width: 400px) {
        .card-content {
          display: flex;
        }
      }</code></pre>

      <h2>CSS Grid and Subgrid</h2>
      <p>CSS Grid has become the go-to layout system, and subgrid allows child elements to participate in their parent's grid system.</p>

      <h2>Modern Color Spaces</h2>
      <p>New color functions like <code>oklch()</code> provide better color control and accessibility.</p>
    `
  }
]

export default function BlogSection({ isActive }: BlogSectionProps) {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null)
  const [currentView, setCurrentView] = useState<'list' | 'article'>('list')

  useEffect(() => {
    if (!isActive) {
      setSelectedArticle(null)
      setCurrentView('list')
      return
    }

    // Check if we're on a specific article route
    const hash = window.location.hash
    const articleMatch = hash.match(/^#blog\/(.+)$/)

    if (articleMatch) {
      const slug = articleMatch[1]
      const article = blogArticles.find(a => a.slug === slug)
      if (article) {
        setSelectedArticle(article)
        setCurrentView('article')
      } else {
        setCurrentView('list')
      }
    } else {
      setCurrentView('list')
    }
  }, [isActive])

  const handleArticleClick = (article: BlogArticle) => {
    setSelectedArticle(article)
    setCurrentView('article')
    window.location.hash = `blog/${article.slug}`
  }

  const handleBackToBlog = () => {
    setSelectedArticle(null)
    setCurrentView('list')
    window.location.hash = 'blog'
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="blog-section" className={isActive ? 'active' : 'inactive'}>
      <h3 id="text25">Blog</h3>

      {currentView === 'list' && (
        <div id="blog-articles">
          {blogArticles.map((article) => (
            <article key={article.slug} className="blog-card">
              <h4>
                <a
                  href={`#blog/${article.slug}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleArticleClick(article)
                  }}
                >
                  {article.title}
                </a>
              </h4>
              <p className="blog-date">{formatDate(article.date)}</p>
              <p className="blog-excerpt">{article.excerpt}</p>
              <div className="blog-tags">
                {article.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}

      {currentView === 'article' && selectedArticle && (
        <article id="blog-article" className="blog-article-full">
          <h4 id="article-title">{selectedArticle.title}</h4>
          <p className="blog-date">{formatDate(selectedArticle.date)}</p>
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
          <a href="#blog" className="back-to-blog" onClick={(e) => {
            e.preventDefault()
            handleBackToBlog()
          }}>
            ← Back to Blog
          </a>
        </article>
      )}
    </section>
  )
}