import React from "react"

const BlockQuote = ({ data }) => {
  return (
    <div className="py-6">
      <blockquote className="container max-w-xl border-l-4 border-neutral-700 py-2 pl-6 text-neutral-700">
        <p className="text-5xl font-medium italic">{data.quoteBody}</p>
        <cite className="mt-4 block font-bold uppercase not-italic">
          {data.title}
        </cite>
      </blockquote>
    </div>
  )
}

export default BlockQuote
