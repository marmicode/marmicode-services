const allowBots = process.env.ALLOW_BOTS !== 'false'

module.exports = {
  siteMetadata: {
    title: `Marmicode`,
    description: `Helping you cook better apps with the best ingredients`,
    author: `@marmicode`,
    /* siteUrl is required by robots txt plugin. */
    ...(allowBots ? {} : { siteUrl: process.env.BASE_URL }),
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-extract-schema`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marmicode`,
        short_name: `marmicode`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    /* Generate robots.txt and disallow / on Netlify. */
    ...(allowBots
      ? []
      : [
          {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
              policy: [{ userAgent: '*', disallow: '/' }],
            },
          },
        ]),
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
