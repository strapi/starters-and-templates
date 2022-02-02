import { Link } from "gatsby"
import React from "react"

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/blog/${article.slug}`} className="rounded-md bg-white">
      <div className="px-4 py-6">
        <h3 className="font-bold text-neutral-700">{article.title}</h3>
      </div>
    </Link>
  )
}

export default ArticleCard
