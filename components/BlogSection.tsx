'use client'

import type { PostMeta } from '@/lib/posts'
import { formatDate } from '@/lib/date'

interface BlogSectionProps {
  isActive: boolean
  articles: PostMeta[]
}

export default function BlogSection({ isActive, articles }: BlogSectionProps) {
  return (
    <section id="blog-section" className={isActive ? 'active' : 'inactive'}>
      <h3 id="text25">Blog</h3>

      <div id="blog-articles">
        {articles.map((article) => (
          <article key={article.slug} className="blog-card">
            <h4>
              <a href={`/blog/${article.slug}/`}>{article.title}</a>
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
    </section>
  )
}
