/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.hktv-img.com',
        port: '',
        pathname: '/images/HKTV/**'
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**.png'
      }
    ]
  }
};

module.exports = nextConfig;
