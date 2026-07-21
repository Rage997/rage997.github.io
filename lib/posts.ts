// Server-only content layer: reads and validates blog posts from content/blog.
// This is the single source of truth for the blog — the home-page list and the
// per-post pages both read through here, so bad frontmatter fails the build.
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')
const POST_EXTENSIONS = ['.mdx', '.md']

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
}

export interface Post {
  meta: PostMeta
  content: string
}

function isPostFile(file: string): boolean {
  return POST_EXTENSIONS.includes(path.extname(file))
}

function readPostFile(slug: string): { data: Record<string, any>; content: string } | null {
  for (const ext of POST_EXTENSIONS) {
    const filePath = path.join(BLOG_DIR, `${slug}${ext}`)
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(raw)
      return { data, content }
    }
  }
  return null
}

function validateMeta(slug: string, data: Record<string, any>): PostMeta {
  const fail = (msg: string): never => {
    throw new Error(`Invalid frontmatter in content/blog/${slug}: ${msg}`)
  }
  const { title, date, excerpt, tags } = data
  if (typeof title !== 'string' || !title.trim()) fail('`title` is required (non-empty string)')
  if (typeof date !== 'string' || Number.isNaN(Date.parse(date))) fail('`date` is required (parseable date string, e.g. "2026-07-21")')
  if (typeof excerpt !== 'string' || !excerpt.trim()) fail('`excerpt` is required (non-empty string)')
  if (!Array.isArray(tags) || tags.some((t) => typeof t !== 'string')) fail('`tags` is required (array of strings)')
  return { slug, title, date, excerpt, tags }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter(isPostFile)
    .map((file) => file.replace(/\.mdx?$/, ''))
}

export function getAllPostMeta(): PostMeta[] {
  return getAllSlugs()
    .map((slug) => {
      const file = readPostFile(slug)
      if (!file) throw new Error(`Post not found: ${slug}`)
      return validateMeta(slug, file.data)
    })
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
}

export function getPostBySlug(slug: string): Post | null {
  const file = readPostFile(slug)
  if (!file) return null
  return { meta: validateMeta(slug, file.data), content: file.content }
}
