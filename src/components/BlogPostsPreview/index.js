import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

// components[]
import Post from './Post'

// elements
import Container from '../../ui/Container'
import HpSection from '../../ui/HpSection'

// elements
import BigTitle from '../../ui/BigTitle'

const BlogPost = styled.li`
  ${tw`w-full md:w-1/3 mx-auto md:mx-0 text-center px-6 md:flex md:flex-column md:mb-4`};
`
/* ${tw`w-full max-w-sm  mb-10 md:mb-0   md:flex md:flex-column`}; */

function BlogPostPreviewGrid({ title, browseMoreHref, mode, nodes }) {
  return (
    <HpSection>
      <Container>
        {title && (
          <BigTitle dark className="text-center">
            {browseMoreHref ? <Link to={browseMoreHref}>{title}</Link> : title}
          </BigTitle>
        )}

        <ul className="flex flex-wrap  pt-8 mx-auto max-w-sm lg:max-w-4xl list-reset md:mb-12">
          {nodes &&
            nodes.map(node => (
              <BlogPost key={node.id}>
                <Post {...node} mode={mode} clean />
                {/* mode can be either events or posts. it's used to form the url to the individual page. */}
              </BlogPost>
            ))}
        </ul>

        {browseMoreHref && (
          <div className="text-center md:mt-10 text-grey mb-12 font-chalk text-4xl">
            <Link to={browseMoreHref}>Browse more &gt;</Link>
          </div>
        )}
      </Container>
    </HpSection>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
}

export default BlogPostPreviewGrid
