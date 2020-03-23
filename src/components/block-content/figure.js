import React from 'react'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

function Figure(props) {
  const { asset, alt, caption } = props
  return (
    <figure>
      {asset && (
        <img
          src={imageUrlFor(buildImageObj(props))
            .width(1200)
            .url()}
          alt={alt}
        />
      )}
      <figcaption style={{ textAlign: 'center', color: 'gray' }}>{caption}</figcaption>
    </figure>
  )
}

export default Figure
