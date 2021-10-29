import { getStrapiURL } from "./api"

export function getStrapiMedia(media) {
  console.log("GET MEDIA", media)
  return "http://localhost:1337/uploads/default_image_4376349d27.png?id=1635499908918"
  const { url } = media.data.attributes
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
  return imageUrl
}
