module.exports = {
  siteMetadata: {
    title: `Purple and Bold`,
    description: `Las Vegas Digital Agency Specializing in Web Development, Design, and Marketing.`,
    author: `Purple and Boldsdfs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Purple And Bold',
        short_name: 'Purple&Bold',
        start_url: '/',
        background_color: '#f0f0f0',
        theme_color: '#112a40',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/apple-touch-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
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
    //plugins we added
    //google anayltics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-133235986-1',
        head: false,
      },
    },
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
