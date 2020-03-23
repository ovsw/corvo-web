import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'

// views
import GenericPage from '../views/GenericPage'

// Components
import BlogPostsPreview from '../components/BlogPostsPreview'
import BlogPost from '../components/BlogPost'

const Events = ({ data, errors }) => {
  const eventsNodes = (data || {}).events ? mapEdgesToNodes(data.events).filter(filterOutDocsWithoutSlugs) : []
  const eventsPage = data && data.eventsPage

  return (
    <>
      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}
      {/* {console.log(eventsNodes.length)} */}
      <GenericPage
        mainImage={data.eventsPage.mainImage}
        seoTitle={data.eventsPage.seoTitle}
        seoDescription={data.eventsPage.seoDescription}
      >
        {eventsNodes.length > 0 ? (
          <BlogPostsPreview title="Latest Events" nodes={eventsNodes} mode="events" />
        ) : (
          <BlogPost {...eventsPage} />
        )}
      </GenericPage>
    </>
  )
}

export default Events

export const query = graphql`
  query EventsPageQuery {
    eventsPage: sanityPage(_id: { regex: "/(drafts.|)events/" }) {
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

    events: allSanityEvent(limit: 100, sort: { fields: [publishedAt], order: ASC }) {
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
