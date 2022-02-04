import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ seo = {} }) => {
  const { strapiGlobal } = useStaticQuery(graphql`
    query {
      strapiGlobal {
        favicon {
          localFile {
            url
          }
        }
        siteName
      }
    }
  `)

  const defaultSeo = {
    metaTitle: strapiGlobal.siteName,
  }

  console.log(strapiGlobal.favicon.localFile.url)

  // Merge default and page-specific SEO values
  const fullSeo = { ...defaultSeo, ...seo }

  const getMetaTags = () => {
    const tags = []

    if (fullSeo.metaTitle) {
      tags.push(
        {
          property: "og:title",
          content: fullSeo.metaTitle,
        },
        {
          name: "twitter:title",
          content: fullSeo.metaTitle,
        }
      )
    }
    if (fullSeo.metaDescription) {
      tags.push(
        {
          name: "description",
          content: fullSeo.metaDescription,
        },
        {
          property: "og:description",
          content: fullSeo.metaDescription,
        },
        {
          name: "twitter:description",
          content: fullSeo.metaDescription,
        }
      )
    }
    if (fullSeo.shareImage) {
      const imageUrl =
        (process.env.GATSBY_ROOT_URL || "http://localhost:8000") +
        fullSeo.shareImage.localFile.publicURL
      tags.push(
        {
          name: "image",
          content: imageUrl,
        },
        {
          property: "og:image",
          content: imageUrl,
        },
        {
          name: "twitter:image",
          content: imageUrl,
        }
      )
    }
    if (fullSeo.article) {
      tags.push({
        property: "og:type",
        content: "article",
      })
    }
    tags.push({ name: "twitter:card", content: "summary_large_image" })

    return tags
  }

  const metaTags = getMetaTags()

  return (
    <Helmet
      title={fullSeo.metaTitle}
      link={[
        {
          rel: "icon",
          href: strapiGlobal.favicon.localFile.url,
        },
      ]}
      meta={metaTags}
    />
  )
}

export default SEO
