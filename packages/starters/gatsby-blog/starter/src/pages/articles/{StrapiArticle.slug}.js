import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlocksRenderer from "../../components/blocks-renderer"
import SEO from "../../components/seo"

const ArticlePage = ({ data }) => {
  const article = data.strapiArticle

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.cover,
    article: true,
  }

  return (
    <Layout as="article">
      <SEO seo={seo} />
      <header className="container max-w-4xl py-8">
        <h1 className="text-6xl font-bold text-neutral-700">{article.title}</h1>
        <p className="mt-4 text-2xl text-neutral-500">{article.description}</p>
        <GatsbyImage
          image={getImage(article.cover.localFile)}
          alt={article.cover.alternativeText}
          className="mt-6"
        />
      </header>
      <main className="mt-8">
        <BlocksRenderer blocks={article.blocks} />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    strapiArticle(id: { eq: $id }) {
      id
      slug
      title
      description
      blocks {
        ...Blocks
      }
      cover {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default ArticlePage
