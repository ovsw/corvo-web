import { css } from 'styled-components'

const sizes = {
  // xxl: 1600,
  // xl: 1280,
  // lg: 1024,
  // md: 768,
  // sm: 640,
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1600px',
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default media
