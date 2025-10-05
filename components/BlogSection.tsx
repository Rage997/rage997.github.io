'use client'

import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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

export default function BlogSection({ isActive }: BlogSectionProps) {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null)
  const [currentView, setCurrentView] = useState<'list' | 'article'>('list')
  const [articles, setArticles] = useState<BlogArticle[]>([])

  useEffect(() => {
    fetch('/articles.json')
      .then(res => res.json())
      .then((data: BlogArticle[]) => setArticles(data))
      .catch(console.error)
  }, [])

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
      const article = articles.find(a => a.slug === slug)
      if (article) {
        setSelectedArticle(article)
        setCurrentView('article')
      } else {
        setCurrentView('list')
      }
    } else {
      setCurrentView('list')
    }
  }, [isActive, articles])

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
          {articles.map((article: BlogArticle) => (
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
                {article.tags.map((tag: string) => (
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
           <div className="blog-content">
             {selectedArticle.content.includes('<') ? (
               <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
             ) : (
               <ReactMarkdown remarkPlugins={[remarkGfm]}>
                 {selectedArticle.content}
               </ReactMarkdown>
             )}
           </div>
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