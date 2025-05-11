/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this line to enable static export
  output: 'export',

  // Keep ESLint disabled during build if needed
  eslint: {
    ignoreDuringBuilds: true,
  },

  // For static export, we need unoptimized images
  images: {
    unoptimized: true,
    // Add any domains you need for external images
    // domains: ['example.com'],
  },

  // Add this for Three.js support
  transpilePackages: ['three'],

  // This helps with routing on traditional web servers
  trailingSlash: true,
};

// Use module.exports syntax for better compatibility
module.exports = nextConfig;