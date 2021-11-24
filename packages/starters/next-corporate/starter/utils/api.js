import qs from "qs"

export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  }

  // Build request URL
  const queryString = qs.stringify(urlParamsObject)
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`

  // Trigger API call
  console.log("FETCH", requestUrl)
  const response = await fetch(requestUrl, mergedOptions)

  // Handle response
  if (!response.ok) {
    console.error(response.statusText)
    throw new Error(`An error occured please try again`)
  }
  const data = await response.json()
  return data
}

/**
 *
 * @param {object} params The router params object with slug: { slug: [<slug>] }
 * @param {string} locale The current locale specified in router.locale
 * @param {boolean} preview router isPreview value
 */
export async function getPageData(params) {
  // Find the pages that match this slug
  const pagesData = await fetchAPI("/pages", params)

  // Make sure we found something, otherwise return null
  if (pagesData.data == null || pagesData.data.length === 0) {
    return null
  }

  // Return the first item since there should only be one result per slug
  return pagesData.data[0]
}

// Get site data from Strapi (metadata, navbar, footer...)
export async function getGlobalData(locale) {
  const global = await fetchAPI("/global", {
    locale,
    populate: {
      metadata: {
        populate: "*",
      },
      favicon: "*",
      notificationBanner: {
        populate: "*",
      },
      navbar: {
        populate: "*",
      },
      footer: {
        populate: "*",
      },
    },
  })
  return global
}
