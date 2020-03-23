import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'

// views
import GenericPage from '../views/GenericPage'

// components
import BlogPost from '../components/BlogPost'

const ContactPage = ({ data, errors }) => {
  const contactPage = data && data.contactPage

  return (
    <>
      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}

      <GenericPage
        mainImage={data.contactPage.mainImage}
        seoTitle={data.contactPage.seoTitle}
        seoDescription={data.contactPage.seoDescription}
      >
        {contactPage && <BlogPost {...contactPage} />}
      </GenericPage>
    </>
  )
}

export default ContactPage

export const query = graphql`
  query ContactPageQuery {
    contactPage: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
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
