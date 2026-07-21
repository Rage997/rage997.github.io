// Generates public/projects.json for the client-side Projects section.
// Blog posts are no longer processed here — they are read (and validated) at
// build time by lib/posts.ts and rendered as static per-post pages.
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentDir = path.join(__dirname, '..', 'content');
const publicDir = path.join(__dirname, '..', 'public');
const projectsDir = path.join(contentDir, 'projects');

const projects = [];

if (fs.existsSync(projectsDir)) {
  fs.readdirSync(projectsDir).forEach(file => {
    if (path.extname(file) === '.md') {
      const filePath = path.join(projectsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content: markdownContent } = matter(fileContent);

      projects.push({
        slug: path.basename(file, '.md'),
        ...data,
        content: markdownContent
      });
    }
  });

  // Sort by year descending
  projects.sort((a, b) => b.year - a.year);
}

fs.writeFileSync(path.join(publicDir, 'projects.json'), JSON.stringify(projects, null, 2));

console.log('Projects generated successfully');
