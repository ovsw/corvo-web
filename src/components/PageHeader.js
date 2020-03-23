import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'

const StyledHeaderWrapper = styled.div`
  ${tw``};

  height: 180px;

  @media (min-width: 600px) {
    height: 200px;
  }

  @media (min-width: 900px) {
    height: 300px;
  }

  @media (min-width: 1200px) {
    height: 400px;
  }
  @media (min-width: 1600px) {
    height: 450px;
  }

  img {
    width: 100%;
    position: fixed;
    object-fit: cover;
  }
`

const PageHeader = ({ mainImage }) => (
  <StyledHeaderWrapper>
    {mainImage && mainImage.asset && (
      <picture alt={mainImage.alt}>
        <source
          srcSet={imageUrlFor(buildImageObj(mainImage))
            .width(400)
            .height(220)
            .fit('crop')
            .url()}
          media="(max-width: 400px)"
        />

        <source
          srcSet={imageUrlFor(buildImageObj(mainImage))
            .width(600)
            .height(250)
            .fit('crop')
            .url()}
          media="(min-width: 401px) and (max-width: 1199px)"
        />

        <source
          srcSet={imageUrlFor(buildImageObj(mainImage))
            .width(1600)
            .height(550)
            .fit('crop')
            .url()}
          media="(min-width: 1200px) and (max-width: 1600px)"
        />

        <source
          srcSet={imageUrlFor(buildImageObj(mainImage))
            .width(1900)
            .height(530)
            .fit('crop')
            .url()}
          media="(min-width: 1600px)"
        />

        <img
          src={imageUrlFor(buildImageObj(mainImage))
            .width(1900)
            .height(500)
            .fit('crop')
            .url()}
          alt={mainImage.alt}
        />
      </picture>
    )}
  </StyledHeaderWrapper>
)

export default PageHeader
