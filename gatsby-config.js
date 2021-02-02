module.exports = {
  siteMetadata: {
    title: `Lankes Koengeter Architekten`,
    description: ``,
    author: `Rupert Adlmaier`
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
