import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'

// views
import GenericPage from '../views/GenericPage'

// Components
import BlogPost from '../components/BlogPost'

const BlogPostTemplate = props => {
  const { data, errors } = props
  const post = data && data.post
  return (
    <>
      {/* {errors && <SEO title="GraphQL Error" />} */}
      {/* {post && <SEO title={post.title || 'Untitled'} />} */}

      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}
      <GenericPage mainImage={data.post.mainImage}>{post && <BlogPost {...post} />}</GenericPage>
    </>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
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
