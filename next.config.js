/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/portfolio' : '';

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: basePath,
    assetPrefix: basePath,
    images: {
        unoptimized: true,
        path: `${basePath}/img/`
    }
}

module.exports = nextConfig
