# Personal Website - Next.js Conversion

My personal website/portfolio/blog in modern Next.js with TypeScript.

## Features

- **Single-page application** with smooth section navigation
- **Blog section** with article listing and easy maintenance using markdown

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
├── public/
│   └── images/             # Optimized images
└── lib/
    └── navigation.ts       # Navigation utilities (future)
```

## Blog Features

The blog section includes:
- **Article listing** with excerpts, dates, and tags
- **Individual article views** with full content
- **Hash-based navigation** (#blog, #blog/article-slug)
- **Responsive article cards** matching the design system

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

Feel free to fork the repo and use it for your own website!