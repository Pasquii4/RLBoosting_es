const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],

    webpack: (config) => {
        // Ensure single React instance - critical for R3F
        config.resolve.alias = {
            ...config.resolve.alias,
            'react': path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom'),
        };

        return config;
    },
};

module.exports = nextConfig;
