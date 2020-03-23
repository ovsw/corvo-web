import React from 'react'
import Headroom from 'react-headroom'
import { graphql, useStaticQuery } from 'gatsby'

import GlobalStyle from '../styles/global'
import SEO from './SEO'
import Header from './Header'
import Footer from './Footer'

import '../styles/tw.css'

import 'typeface-cantata-one'
import 'typeface-open-sans'

import 'typeface-cabin-sketch'
import 'typeface-special-elite'

const Layout = ({ seoTitle, seoDescription, children }) => {
  const data = useStaticQuery(
    graphql`
      query siteSettingsQuery {
        site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
          seoTitle
          seoDescription
          footerText
        }
      }
    `
  )

  const seoTitleProcessed = seoTitle !== undefined ? seoTitle : data.site.seoTitle
  const seoDescProcessed = seoDescription !== undefined ? seoDescription : data.site.seoDescription

  return (
    <>
      <SEO seoTitle={seoTitleProcessed} seoDescription={seoDescProcessed} />
      <GlobalStyle />

      <Headroom style={{ zIndex: '99999', position: 'fixed' }} disable>
        <Header />
      </Headroom>
      {children}
      <Footer footerText={data.site.footerText} />
    </>
  )
}

export default Layout
