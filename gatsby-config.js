module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Carbon",
    description: "A Gatsby and React theme for the Particle design system",
    keywords: "gatsby, react, particle",
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Particle Design Gatsby Theme",
        short_name: "Gatsby Theme Particle",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#5845DB",
        display: "browser",
      },
    },
    {
      resolve: "gatsby-theme-carbon",
    },
  ],
};
