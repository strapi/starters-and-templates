import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import ArticlesGrid from "../components/articles-grid"

const IndexPage = () => {
  const { allStrapiArticle } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        nodes {
          id
          slug
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <header className="container mt-8">
        <h1 className="text-6xl font-bold text-neutral-700">Website</h1>
        <p className="mt-2 text-xl text-neutral-500">
          A cool blog made with Gatsby and Strapi v4
        </p>
      </header>
      <main>
        <ArticlesGrid articles={allStrapiArticle.nodes} />
      </main>
    </Layout>
  )
}

export default IndexPage
