import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Moment from 'react-moment'
import { buildImageObj, cn, getBlogUrl } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import BlockText from '../block-text'

const ItemWrapper = styled(Link)`
  ${tw`text-left font-typewritter block`};
  ${tw`rounded-lg overflow-hidden`};
  margin-bottom: 5rem;
  background-color: white;
  ${props => (props.square ? '' : 'border-radius: 1000rem 1000rem 0 0;')};
  border: 7px solid white;
  ${props =>
    props.clean
      ? 'box-shadow: 10px 10px 0px 7px rgba(193, 97, 31, 0.3)'
      : 'box-shadow: 20px 15px 0px 10px rgba(193, 97, 31, 0.3), 30px -20px 0px 0px rgba(193, 97, 31, 0.3),5px 5px 5px 0px rgba(0, 0, 0, 0.1);'};
  @media (min-width: 600px) {
    margin-bottom: 2rem;
  }
`

function BlogPostPreviewItem({
  title,
  slug,
  publishedAt,
  mainImage,
  _rawExcerpt,
  mode,
  square = false,
  clean = false,
}) {
  const itemUrl = mode === 'posts' ? getBlogUrl(publishedAt, slug.current) : `/events/${slug.current}`

  return (
    <ItemWrapper to={itemUrl} square={square} clean={clean}>
      {mainImage && mainImage.asset && (
        <img
          src={imageUrlFor(buildImageObj(mainImage))
            .width(450)
            .height(Math.floor((9 / 16) * 450))
            .url()}
          alt={mainImage.alt}
        />
      )}
      <div className="p-4">
        <h3 className="text-2xl text-grey-darker mb-4 leading-normal">{title}</h3>
        <p className="mb-1 text-orange-light">
          <Moment format="MMMM Do">{publishedAt}</Moment>
        </p>
        {_rawExcerpt && (
          <div className="text-grey-dark mt-4 leading-normal">
            <BlockText blocks={_rawExcerpt} />
          </div>
        )}
      </div>
    </ItemWrapper>
  )
}

export default BlogPostPreviewItem
