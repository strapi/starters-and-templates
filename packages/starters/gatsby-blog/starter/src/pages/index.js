import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import ArticlesGrid from "../components/articles-grid"
import SEO from "../components/seo"

const IndexPage = () => {
  const { allStrapiArticle, strapiGlobal } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        nodes {
          ...ArticleCard
        }
      }
      strapiGlobal {
        siteName
        siteDescription
      }
    }
  `)

  return (
    <Layout>
      <SEO />
      <header className="container mt-8">
        <h1 className="text-6xl font-bold text-neutral-700">
          {strapiGlobal.siteName}
        </h1>
        <p className="mt-4 text-2xl text-neutral-500">
          {strapiGlobal.siteDescription}
        </p>
      </header>
      <main>
        <ArticlesGrid articles={allStrapiArticle.nodes} />
      </main>
    </Layout>
  )
}

export default IndexPage
