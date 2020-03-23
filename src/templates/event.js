import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'

// views
import GenericPage from '../views/GenericPage'

// Components
import BlogPost from '../components/BlogPost'

const EventTemplate = props => {
  const { data, errors } = props
  const event = data && data.event
  return (
    <>
      {/* {errors && <SEO title="GraphQL Error" />} */}
      {/* {post && <SEO title={post.title || 'Untitled'} />} */}

      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}
      <GenericPage mainImage={data.event.mainImage}>{event && <BlogPost {...event} />}</GenericPage>
    </>
  )
}

export default EventTemplate

export const query = graphql`
  query EventTemplateQuery($id: String!) {
    event: sanityEvent(id: { eq: $id }) {
      id
      publishedAt
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
      title
      slug {
        current
      }
      _rawBody
    }
  }
`
