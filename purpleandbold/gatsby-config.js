module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    //plugins we added
    //sass loader
    `gatsby-plugin-sass`,
    //gatsby-source-contentful plugin
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3b8phtgf62nm`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: `4dcfd3c7e9b4c0758b23330e39baf73b9f9c5cc0a25fe4a3941c9883e723524d`,
      },
    },
    //allows you to query markdown from contentful as HTML
    `@contentful/gatsby-transformer-contentful-richtext`,
    //slide up slide down for the services section descriptions
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
