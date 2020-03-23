import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'

// views
import GenericPage from '../views/GenericPage'

// components
import BlogPost from '../components/BlogPost'

const ReviewsPage = ({ data, errors }) => {
  const reviewsPage = data && data.reviewsPage

  return (
    <>
      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}

      <GenericPage
        mainImage={data.reviewsPage.mainImage}
        seoTitle={data.reviewsPage.seoTitle}
        seoDescription={data.reviewsPage.seoDescription}
      >
        {reviewsPage && <BlogPost {...reviewsPage} />}
      </GenericPage>
    </>
  )
}

export default ReviewsPage

export const query = graphql`
  query ReviewsPageQuery {
    reviewsPage: sanityPage(_id: { regex: "/(drafts.|)reviews/" }) {
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
