import React from 'react'
import Helmet from 'react-helmet'
// import { graphql, useStaticQuery } from 'gatsby'
import config from '../../config/website'

import {
  websiteSchema,
  localBusinessSchema,
  professionalServiceSchema,
  breadCrumbsList,
  organizationSchema,
  reviewSchema,
} from './schemas'

const SEO = ({ seoTitle, seoDescription }) => {
  // const data = useStaticQuery(
  //   graphql`
  //     query SEO {
  //       site {
  //         buildTime(formatString: "YYYY-MM-DD")
  //       }
  //     }
  //   `
  // )

  const title = seoTitle
  const description = seoDescription

  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
  const homeURL = `${config.siteUrl}${realPrefix}`
  const image = `${homeURL}${config.siteLogo}`

  return (
    <Helmet>
      <html lang={config.siteLanguage} />
      <title>{title}</title>
      <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <meta name="gatsby-starter" content="Gatsby Starter Portfolio Cara" />
      <link rel="shortcut icon" href="favicon.ico" />
      <meta name="msapplication-TileColor" content={config.backgroundColor} />
      <meta name="msapplication-config" content="browserconfig.xml" />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:locale" content={config.ogLanguage} />
      <meta property="og:site_name" content={config.ogSiteName} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      {config.siteFBAppID && <meta property="fb:app_id" content={config.siteFBAppID} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ''} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
      <meta name="google-site-verification" content="QS8GjLT3XOeeEU9Mc6NgrGNBUPlH144c9LGV_RXQWKk" />
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(professionalServiceSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadCrumbsList)}</script>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
    </Helmet>
  )
}

export default SEO
