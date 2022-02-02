require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Strapi Gatsby Blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: "article",
          },
          {
            singularName: "author",
          },
          {
            singularName: "category",
          },
        ],
        singleTypes: [
          {
            singularName: "about",
          },
          {
            singularName: "global",
          },
        ],
      },
    },
  ],
}
