import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'

// views
import GenericPage from '../views/GenericPage'

// Components
import BlogPostsPreview from '../components/BlogPostsPreview'

const News = ({ data, errors }) => {
  const postNodes = (data || {}).posts ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs) : []

  return (
    <>
      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}

      <GenericPage
        mainImage={data.newsPage.mainImage}
        seoTitle={data.newsPage.seoTitle}
        seoDescription={data.newsPage.seoDescription}
      >
        {postNodes && <BlogPostsPreview title="Latest News" nodes={postNodes} mode="posts" />}
      </GenericPage>
    </>
  )
}

export default News

export const query = graphql`
  query NewsPageQuery {
    newsPage: sanityPage(_id: { regex: "/(drafts.|)news/" }) {
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

    posts: allSanityPost(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
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
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`
