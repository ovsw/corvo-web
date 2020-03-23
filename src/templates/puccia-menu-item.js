import React from 'react'
import { graphql } from 'gatsby'
// import Container from '../components/container'
// import GraphQLErrorList from '../components/graphql-error-list'
// import Project from '../components/project'
// import SEO from '../components/seo'
// import Layout from '../containers/layout'

// components
import Layout from '../components/Layout'
import SingleDish from '../components/SingleDish'

export const query = graphql`
  query PucciaMenuItemQuery($id: String!) {
    pucciaMenuItem: sanityPuccia(id: { eq: $id }) {
      id
      ingredients
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
      name
      price
      slug {
        current
      }
      _rawBody
    }
  }
`

const MenuItem = props => {
  const { data, errors } = props
  const menuItem = data && data.pucciaMenuItem
  return (
    <Layout>
      <SingleDish dish={menuItem} category="Pizza-dough Sandwich" suffix="Puccia" normalImagePosition test="wut" />
    </Layout>
  )
}

export default MenuItem
