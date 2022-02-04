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
      {/* TODO: Display images in the actual content */}
      {data.richTextBody.medias.map((media) => (
        <GatsbyImage image={getImage(media)} />
      ))}
    </div>
  )
}

export default BlockRichText
