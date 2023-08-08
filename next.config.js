/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['picture.frame.io']
  }
}

module.exports = nextConfig
