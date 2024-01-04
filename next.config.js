module.exports = {
    reactStringMode: true,

    webpack: (config, options) => {
        config.module.rules.push({
          test: /\.pdf/,
          type: 'asset/resource',
        })
    
        return config
    },
    
}