/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @returns Full URL of the Strapi endpoint
 */
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(`/api${path}`)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}
