/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.pdf/,
            type: 'asset/resource',
        })

        return config
    },

    images: {
        unoptimized: true,
    },

    turbopack: {},
    output: 'export',
}

module.exports = nextConfig