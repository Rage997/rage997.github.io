import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { common } from 'lowlight'
import glsl from 'highlight.js/lib/languages/glsl'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/lib/date'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  const { title, excerpt, tags } = post.meta
  return {
    title,
    description: excerpt,
    keywords: tags,
    openGraph: {
      title,
      description: excerpt,
      type: 'article',
      url: `https://rage997.github.io/blog/${params.slug}/`,
    },
    twitter: {
      card: 'summary',
      title,
      description: excerpt,
    },
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header />
          <section id="blog-section" className="active">
            <article className="blog-article-full">
              <h4 id="article-title">{post.meta.title}</h4>
              <p className="blog-date">{formatDate(post.meta.date)}</p>
              <div className="blog-tags">
                {post.meta.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="blog-content">
                <MDXRemote
                  source={post.content}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [[rehypeHighlight, { languages: { ...common, glsl } }]],
                    },
                  }}
                />
              </div>
              <a href="/#blog" className="back-to-blog">← Back to Blog</a>
            </article>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  )
}
