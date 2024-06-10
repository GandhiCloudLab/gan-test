/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  forceSwcTransforms: true,
  swcMinify: false,
};

module.exports = nextConfig;
