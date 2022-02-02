import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
    <div>
      <h1>Website</h1>
      <ul>
        {allStrapiArticle.nodes.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default IndexPage
