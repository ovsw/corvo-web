import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const StyledContainer = styled.div`
  @media (min-width: 1400px) {
    ${tw`mx-auto`};
    max-width: 1400px;
  }
`

const Container = props => <StyledContainer {...props}>{props.children}</StyledContainer>

export default Container
