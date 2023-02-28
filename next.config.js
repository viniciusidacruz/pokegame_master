/** @type {import('next').NextConfig} */
const pkg = require('proxy-from-env')

const nextConfig = {
  reactStrictMode: true,
  proxy: pkg.getProxyForUrl,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
}

module.exports = nextConfig
