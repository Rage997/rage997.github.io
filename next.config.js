/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Generate static HTML and assets for GitHub Pages
  trailingSlash: true,
  basePath: isProd ? '' : '', // For user site (rage997.github.io), no basePath needed
  assetPrefix: isProd ? '' : '',
  images: {
    unoptimized: true, // Disable Next.js image optimization as it's not supported on GitHub Pages
  },
}

module.exports = nextConfig