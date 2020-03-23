import React from 'react'
import tw from 'tailwind.macro'
import styled, { css } from 'styled-components'

const ArrowBaseStyles = css`
  color: red;
  position: absolute;
  /* display: none !important; */
  height: 40px;
  width: 40px;
  line-height: 1;
  font-size: 40px;
  cursor: pointer;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
  padding: 0;
  border: none;
  outline: none;
  z-index: 3;

  &:focus {
    outline: none;
  }
`
const ArrowLeft = styled.button`
  ${() => ArrowBaseStyles};
  left: 15px;
`
const ArrowRight = styled.button`
  ${() => ArrowBaseStyles};
  right: 15px;
`

const Arrow = props => {
  const { dir, children } = props

  return (
    <>
      {dir === 'left' && (
        <ArrowLeft type="button" aria-label="slideshow left arrow" {...props}>
          {children}
        </ArrowLeft>
      )}
      {dir === 'right' && (
        <ArrowRight type="button" aria-label="slideshow right arrow" {...props}>
          {children}
        </ArrowRight>
      )}
    </>
  )
}

export default Arrow
