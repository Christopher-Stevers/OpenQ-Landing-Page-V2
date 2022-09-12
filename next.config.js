module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [`@svgr/webpack`],
    });
    return config;
  },
  env: {
    GOOGLE_ANALYTICS_ID: 'G-PMCBFEC10P',
  },
  images: { domains: ['avatars.githubusercontent.com'] },
};
