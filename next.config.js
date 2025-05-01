/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove this line if it exists: output: 'export',

  // Keep ESLint disabled during build if needed
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Vercel can handle optimized images - enable this
  images: {
    // Add any domains you need for external images
    // domains: ['example.com'],
    // Remove unoptimized: true if it exists
  },

  // Other Vercel-friendly settings can go here
};
