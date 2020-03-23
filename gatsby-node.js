const { format } = require('date-fns')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges.forEach((edge, index) => {
    const { id, slug = {}, publishedAt } = edge.node
    const dateSegment = format(publishedAt, 'YYYY/MM')
    const path = `/news/${dateSegment}/${slug.current}/`

    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/blog-post.js'),
      context: { id },
    })
  })
}

async function createEventPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityEvent(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const eventEdges = (result.data.allSanityEvent || {}).edges || []

  eventEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node
    const path = `/events/${slug.current}/`

    reporter.info(`Creating event page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/event.js'),
      context: { id },
    })
  })
}

async function createSavoryPizzaMenuItemPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanitySavoryPizza {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  // const savoryPizzaCurrMenu = result.data.sanityMenuSettings.savoryPizzaCurrMenu || []
  const savoryPizzaEdges = (result.data.allSanitySavoryPizza || {}).edges || []

  savoryPizzaEdges.forEach(edge => {
    const { id, slug = {} } = edge.node
    const path = `/menu/${slug.current}/`

    reporter.info(`Creating Savory Pizza Menu page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/savoryPizza-menu-item.js'),
      context: { id },
    })
  })
}

async function createDessertPizzaMenuItemPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityDessertPizza {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  // const dessertPizzaCurrMenu = result.data.sanityMenuSettings.dessertPizzaCurrMenu || []
  const dessertPizzaEdges = (result.data.allSanityDessertPizza || {}).edges || []

  dessertPizzaEdges.forEach(edge => {
    const { id, slug = {} } = edge.node
    const path = `/menu/${slug.current}/`

    reporter.info(`Creating Dessert Pizza Menu page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/dessertPizza-menu-item.js'),
      context: { id },
    })
  })
}

async function createPucciaMenuItemPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPuccia {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  // const pucciaCurrMenu = result.data.sanityMenuSettings.pucciaCurrMenu || []
  const pucciaEdges = (result.data.allSanityPuccia || {}).edges || []

  pucciaEdges.forEach(edge => {
    const { id, slug = {} } = edge.node
    const path = `/menu/${slug.current}/`

    reporter.info(`Creating Puccia Menu page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/puccia-menu-item.js'),
      context: { id },
    })
  })
}

async function createInsalateMenuItemPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityInsalata {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  // const insalateCurrMenu = result.data.sanityMenuSettings.insalateCurrMenu || []
  const dessertPizzaEdges = (result.data.allSanityInsalata || {}).edges || []

  dessertPizzaEdges.forEach(edge => {
    const { id, slug = {} } = edge.node
    const path = `/menu/${slug.current}/`

    reporter.info(`Creating Insalate Menu page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/insalate-menu-item.js'),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter)
  await createEventPages(graphql, actions, reporter)
  await createSavoryPizzaMenuItemPages(graphql, actions, reporter)
  await createDessertPizzaMenuItemPages(graphql, actions, reporter)
  await createPucciaMenuItemPages(graphql, actions, reporter)
  await createInsalateMenuItemPages(graphql, actions, reporter)
}
