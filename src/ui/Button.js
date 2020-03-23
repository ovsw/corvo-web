import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'

const buttonStyles = css`
  ${tw`px-6 py-4 pt-6 text-lg md:text-xl uppercase font-typewritter text-black`};
  color: #ded1c1;
  text-shadow: 0 0 3px #ded1c1;
  background-color: rgb(28, 151, 151);
  box-shadow: #c1611f 5px 6px 1px, rgba(251, 29, 37, 1) 3px 4px 16px;
`

export const StyledA = styled.a`
  ${buttonStyles}
`

export const StyledLink = styled(Link)`
  ${buttonStyles}
`
