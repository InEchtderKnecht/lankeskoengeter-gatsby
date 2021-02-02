module.exports = {
  siteMetadata: {
    title: `Lankes Koengeter Architekten`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        ssr: true,
        minify: true,
      },
    },
  ],
};
