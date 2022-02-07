import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlockRichText = ({ data }) => {
  return (
    <div className="prose mx-auto py-8">
      <div
        dangerouslySetInnerHTML={{
          __html: data.richTextBody.data.childMarkdownRemark.html,
        }}
      />
    </div>
  )
}

export default BlockRichText
