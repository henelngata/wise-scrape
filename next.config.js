/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Other experimental options can go here
  },
  serverExternalPackages: ["mongoose"],
  images: {
    domains: ["m.media-amazon.com"],
  },
};

module.exports = nextConfig;
