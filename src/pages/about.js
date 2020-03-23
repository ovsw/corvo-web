import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'

// views
import GenericPage from '../views/GenericPage'

// components
import BlogPost from '../components/BlogPost'

const AboutPage = ({ data, errors }) => {
  const aboutPage = data && data.aboutPage

  return (
    <>
      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}

      <GenericPage
        mainImage={data.aboutPage.mainImage}
        seoTitle={data.aboutPage.seoTitle}
        seoDescription={data.aboutPage.seoDescription}
      >
        {aboutPage && <BlogPost {...aboutPage} />}
      </GenericPage>
    </>
  )
}

export default AboutPage

export const query = graphql`
  query AboutPageQuery {
    aboutPage: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      title
      seoTitle
      seoDescription
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      _rawBody
    }
  }
`
