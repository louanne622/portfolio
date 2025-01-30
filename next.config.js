/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/portfolio',
    experimental: {
        turbotrace: {
            logLevel: 'error'
        }
    }
}

module.exports = nextConfig
