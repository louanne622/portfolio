/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: isProduction ? '/portfolio' : "",
}

module.exports = nextConfig
