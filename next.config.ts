/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Disable ESLint during build to avoid the errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Important for GitHub Pages to work correctly with static export
  trailingSlash: true,
  // If deploying to a subfolder (like username.github.io/repo-name)
  // Uncomment and adjust the line below
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH ? `/${process.env.NEXT_PUBLIC_BASE_PATH}` : '',
};

module.exports = nextConfig;
