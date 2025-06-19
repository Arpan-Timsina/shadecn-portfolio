/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverComponentsExternalPackages: [
            '@react-email/render',
        ]
    },
    eslint: {
      ignoreDuringBuilds: true,
    }
}

module.exports = nextConfig
