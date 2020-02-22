const config = require('./config/site');

module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
  //   'gatsby-plugin-react-helmet',
  //   {
  //     resolve: `gatsby-plugin-manifest`,
  //     options: {
  //       name: 'gatsby-starter-default',
  //       short_name: 'starter',
  //       start_url: '/',
  //       background_color: '#663399',
  //       theme_color: '#663399',
  //       display: 'minimal-ui',
  //       icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
  //     },
  //   },
  //   'gatsby-plugin-sass',
  //   'gatsby-plugin-offline'
  // ],
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-catch-links',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'posts',
      path: `${__dirname}/content/posts`,
    },
  },
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 750,
            quality: 90,
            linkImagesToOriginal: true,
          },
        },
        'gatsby-remark-prismjs',
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-emotion',
    options: {
      autoLabel: process.env.NODE_ENV !== 'production',
      // eslint-disable-next-line
      labelFormat: `[filename]--[local]`,
    },
  },
  {
    resolve: 'gatsby-plugin-typography',
    options: {
      pathToConfigModule: 'config/typography.js',
    },
  },
  'gatsby-plugin-sharp',
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: config.title,
      short_name: config.shortName,
      description: config.description,
      start_url: config.pathPrefix,
      background_color: config.backgroundColor,
      theme_color: config.themeColor,
      display: 'standalone',
      icon: config.favicon,
    },
  },
  'gatsby-plugin-sass',
  'gatsby-plugin-offline',
],
}
