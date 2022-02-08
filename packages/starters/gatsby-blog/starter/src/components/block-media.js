import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlockMedia = ({ data }) => {
  const isVideo = data.file.mime.startsWith("video")

  return (
    <div className="py-8">
      {isVideo ? (
        <p>TODO video</p>
      ) : (
        <GatsbyImage
          image={getImage(data.file.localFile)}
          alt={data.file.alternativeText}
        />
      )}
    </div>
  )
}

export default BlockMedia
