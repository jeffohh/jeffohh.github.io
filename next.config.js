/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.pdf/,
            type: 'asset/resource',
        })
        
        return config
    },

    eslint: {
        ignoreDuringBuilds: true,
    },

    // output: 'export'
}

module.exports = nextConfig