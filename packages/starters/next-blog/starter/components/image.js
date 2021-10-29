import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image, style }) => {
  console.log("IMAGE COMPONENT", image)
  const { url, alternativeText } = image.data.attributes

  const loader = () => {
    return getStrapiMedia(image)
  }

  return (
    <NextImage
      loader={loader}
      layout="responsive"
      width={image.width}
      height={image.height}
      objectFit="contain"
      src={url}
      alt={alternativeText || ""}
    />
  )
}

export default Image
