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
│   ├── layout.tsx          # Root layout with fonts and meta tags
│   ├── page.tsx            # Main page with navigation logic
│   └── globals.css         # Global styles (converted from main.css)
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Social links footer
│   ├── HomeSection.tsx     # Home section component
│   ├── AboutSection.tsx    # About section component
│   ├── ProjectsSection.tsx # Projects section component
│   ├── ThesisSection.tsx   # Thesis section component
│   └── BlogSection.tsx     # Blog section with articles
├── content/
│   ├── blog/               # Blog posts in Markdown
│   └── projects/           # Projects in Markdown
├── public/
│   ├── images/             # Optimized images
│   ├── articles.json       # Generated blog data
│   └── projects.json       # Generated projects data
└── scripts/
    └── generateArticles.js # Content generation script
```

## Blog Features

The blog section includes:
- **Article listing** with excerpts, dates, and tags
- **Individual article views** with full content
- **Hash-based navigation** (#blog, #blog/article-slug)
- **Responsive article cards** matching the design system

### Adding Blog Posts

To add a new blog post:

1. Create a new Markdown file in `content/blog/` (e.g., `my-article.md`)
2. Use the following frontmatter format:

```yaml
---
title: "Your Article Title"
date: "2024-12-15"
excerpt: "A brief description of the article"
tags: ["tag1", "tag2"]
---

Your article content in Markdown...
```

3. Run `npm run build` to generate the updated articles list
4. Commit and push the changes

The articles are automatically sorted by date (newest first) and converted from Markdown to HTML during build.

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