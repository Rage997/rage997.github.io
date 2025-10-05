const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentDir = path.join(__dirname, '..', 'content');
const publicDir = path.join(__dirname, '..', 'public');

const articlesDir = path.join(contentDir, 'blog');
const projectsDir = path.join(contentDir, 'projects');

const articles = [];

if (fs.existsSync(articlesDir)) {
  fs.readdirSync(articlesDir).forEach(file => {
    if (path.extname(file) === '.md') {
      const filePath = path.join(articlesDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content: markdownContent } = matter(fileContent);

      // Keep as markdown for ReactMarkdown
      articles.push({
        slug: path.basename(file, '.md'),
        ...data,
        content: markdownContent
      });
    }
  });

  // Sort by date descending
  articles.sort((a, b) => new Date(b.date) - new Date(a.date));
}

fs.writeFileSync(path.join(publicDir, 'articles.json'), JSON.stringify(articles, null, 2));

// Generate projects
const projects = [];

if (fs.existsSync(projectsDir)) {
  fs.readdirSync(projectsDir).forEach(file => {
    if (path.extname(file) === '.md') {
      const filePath = path.join(projectsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content: markdownContent } = matter(fileContent);

      // Keep as markdown for projects too
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

console.log('Content generated successfully');