import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const BlockSlider = ({ data }) => {
  return (
    <div className="container max-w-3xl py-8">
      <Slider
        dots={true}
        infinite={true}
        speed={300}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={true}
        swipe={true}
      >
        {data.files.map((file) => (
          <GatsbyImage
            key={file.id}
            image={getImage(file.localFile)}
            alt={file.alternativeText}
          />
        ))}
      </Slider>
    </div>
  )
}

export default BlockSlider
