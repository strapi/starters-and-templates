import React from "react"
import ArticleCard from "./article-card"

const ArticlesGrid = ({ articles }) => {
  return (
    <div className="container mt-12 grid grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard article={article} />
      ))}
    </div>
  )
}

export default ArticlesGrid
