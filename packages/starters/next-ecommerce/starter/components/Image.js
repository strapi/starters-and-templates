import { getStrapiMedia } from "../utils/medias"
import NextImage from "next/image"

const Image = (props) => {
  if (!props.media) {
    return <NextImage {...props} />
  }

  const { url, alternativeText } = props.media

  const loader = ({ src }) => {
    return getStrapiMedia(src)
  }

  return (
    <NextImage
      loader={loader}
      layout="responsive"
      objectFit="contain"
      width={props.media.width}
      height={props.media.height}
      src={url}
      alt={alternativeText || ""}
    />
  )
}

export default Image
