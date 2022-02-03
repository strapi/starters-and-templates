import React from "react"
import ReactMarkdown from "react-markdown"

const BlockRichText = ({ data }) => {
  return (
    <div className="prose mx-auto py-8">
      <ReactMarkdown>{data.richTextBody.data.body}</ReactMarkdown>
    </div>
  )
}

export default BlockRichText
