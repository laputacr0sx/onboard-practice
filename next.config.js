/** @type {import('next').NextConfig} */

const nextConfig = {
    headers: () => [
        {
            source: '/api/product/',
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'no-cache'
                }
            ]
        }
    ],
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
