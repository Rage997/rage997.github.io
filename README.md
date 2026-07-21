# Personal Website - Next.js Conversion

My personal website/portfolio/blog in modern Next.js with TypeScript.

## Features

- **Single-page application** with smooth section navigation
- **Blog section** with article listing and easy maintenance using markdown
- **Projects section** with year-grouped listings and easy maintenance using markdown

## Technology Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **React 18** with hooks
- **CSS modules** with preserved custom properties
- **Bootstrap 5** for additional styling

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/
├── app/
│   ├── layout.tsx              # Root layout with fonts and meta tags
│   ├── page.tsx                # Server component: reads post metadata, renders HomeClient
│   ├── blog/[slug]/page.tsx    # Static per-post page (MDX + syntax highlighting + SEO)
│   └── globals.css             # Global styles
├── components/
│   ├── HomeClient.tsx          # Client SPA shell (section navigation, intro animation)
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Social links footer
│   ├── BlogSection.tsx         # Blog list (links to /blog/<slug>/)
│   ├── ProjectsSection.tsx     # Projects section component
│   └── ...                     # Home / About / Thesis sections
├── lib/
│   ├── posts.ts                # Reads + validates blog posts (single source of truth)
│   └── date.ts                 # Shared date formatting
├── content/
│   ├── blog/                   # Blog posts in Markdown / MDX (.md / .mdx)
│   └── projects/               # Projects in Markdown
├── public/
│   ├── images/                 # Images
│   └── projects.json           # Generated projects data
└── scripts/
    └── generateProjects.js     # Projects content generation script
```

## Blog Features

The blog section includes:
- **Article listing** with excerpts, dates, and tags
- **Individual static pages** at `/blog/<slug>/`, each with its own `<title>` and OpenGraph metadata for sharing and SEO
- **Markdown & MDX** with GitHub-flavored tables and syntax-highlighted code blocks (via `rehype-highlight`)
- **Validated frontmatter** — a post missing `title`/`date`/`excerpt`/`tags` fails the build with a clear error

### Adding Blog Posts

To add a new blog post:

1. Drop a new `.md` or `.mdx` file in `content/blog/` (e.g. `my-article.mdx`)
2. Start it with frontmatter:

```yaml
---
title: "Your Article Title"
date: "2024-12-15"
excerpt: "A brief description of the article"
tags: ["tag1", "tag2"]
---

Your article content...
```

3. Write the body in Markdown. Fenced code blocks are syntax-highlighted — tag the language for best results (` ```glsl `, ` ```bash `, ` ```ts `, ...). With `.mdx` you can also import and embed React components directly in the post.
4. `npm run dev` shows it live instantly (posts are read and validated at request time — no generation step). `npm run build` emits the static page. Commit and push to deploy.

Posts are sorted by date (newest first); each becomes a static page at `/blog/<slug>/`.

### Adding Projects

To add a new project:

1. Create a new Markdown file in `content/projects/` (e.g., `my-project.md`)
2. Use the following frontmatter format:

```yaml
---
title: "Your Project Title"
year: 2024
link: "https://github.com/username/repo"
---

Your project description in Markdown...
```

3. Run `npm run build` to generate the updated projects list
4. Commit and push the changes

The projects are automatically sorted by year (newest first) and grouped by year on the page.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

Feel free to fork the repo and use it for your own website!