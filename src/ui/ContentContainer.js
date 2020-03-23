import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const ContentContainerStyled = styled.div`
  ${tw`text-gray-500`};
  ${tw`px-2`};
`

const ContentContainer = ({ children, className = '' }) => (
  <ContentContainerStyled className={className}>{children}</ContentContainerStyled>
)

export default ContentContainer
