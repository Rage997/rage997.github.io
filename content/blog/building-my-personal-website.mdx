---
title: "First Blog Post: How I Built This Website"
date: "2024-10-05"
excerpt: "A behind-the-scenes look at converting my static website to a modern Next.js application with automated deployment."
tags: ["Next.js", "Web Development", "GitHub Pages"]
---

Hey there!  
I’ve been chewing on the idea of sprucing up my personal site for a while now. I wanted something that’s *easy to maintain*, *self‑hosted*, and—most importantly—able to host 
a little blog where I can spill tech tips, random musings, and everything else that’s buzzing in my head. Since this is my very first post, I thought it’d be neat to give you 
a quick rundown of how I actually built the site.

---

## Why a New Site?

My old site was a classic static page: a single HTML file, a handful of CSS rules, a splash of vanilla JavaScript. It worked, but every time I wanted to tweak a section or 
add a new project, I’d end up digging through a maze of files. Plus, I was craving a blog. So, I set a goal: **an easy‑to‑maintain, self‑hosted website that feels fresh and 
modern.**

---

## The Tech Stack

| What | Why I chose it |
|------|----------------|
| **Next.js 14 (App Router)** | File‑based routing, zero configuration for static export, and great performance out of the box. |
| **React Components** | Reusable UI pieces keep my code tidy and make future changes painless. |
| **TypeScript** | Helps catch bugs early and keeps my codebase self‑documenting. |
| **Bootstrap 5** | Keeps the responsive styling simple while letting me tweak a few variables for my own look. |
| **Markdown for Content** | Writing in Markdown feels natural, and I can keep it version‑controlled in Git. |
| **GitHub Pages + Actions** | Completely free hosting that rolls out every time I push to the `master` branch. |

---

## Architecture Overview

The code is organized in a component‑driven way. Every major page—Home, About,
Projects, and Blog—has its own folder under `/app`, and each of those folders
contains small, reusable React components. The idea is that when I need to add a
new feature or tweak a section, I simply drop a component into the right place
and the rest of the page pulls it in automatically.

Next, I tell Next.js to export a pure static site by adding `output: 'export'`
to `next.config.js`. That way the build process emits only HTML, CSS, and
JavaScript, which GitHub Pages can serve without any server‑side magic.

For content, I use Markdown files stored in `/content`. A custom script
(`scripts/generateContent.ts`) runs during the build. It walks through every
Markdown file, reads the frontmatter (title, date, tags), and converts the body
into a lightweight JSON object. Each category gets its own JSON file. At
runtime, a component (`components/ContentLoader.tsx`) calls `getStaticProps` to
fetch the appropriate JSON and passes the data down to the UI components,
letting me keep the content separate from the markup.

Finally, the whole deployment pipeline lives in GitHub Actions. Whenever I push
to the `master` branch, the workflow runs `npm install`, builds the project with
`npm run build`, then executes `npm run export`. The resulting static files in
the `out/` folder are automatically uploaded and deployed to GitHub Pages, so
there’s no manual upload step and no additional hosting configuration required.

The whole process is automatic—no manual uploads or server setup required.

---

## How I Keep Things Simple

### Add a Post  
  *Create a new `.md` file in `/content/blog`, add a title, date, and some Markdown. Commit & push.*  
  The pipeline picks it up, generates JSON, and the next build publishes it.

### Add a Project  
  *Drop a `.md` file in `/content/projects`, optionally tag it with a year.*  
  Projects are grouped by year on the Projects page.

### Styling Tweaks  
  Bootstrap variables in `styles/_variables.scss` let me adjust colors and spacing without touching the core library.


That’s the gist of how I turned a static landing page into a fully‑functional,
self‑hosted blog powered by Next.js. Stay tuned for more posts—both about the
tech and the things I’m learning along the way!

