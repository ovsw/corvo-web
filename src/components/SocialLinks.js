import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { FaFacebookSquare, FaInstagram, FaTwitter, FaRegEnvelope } from 'react-icons/fa'

const SocialLink = styled.a`
  ${tw`mr-4 text-2xl`};
  &:hover {
    ${tw`text-white`};
  }
`

const SocialIcons = () => (
  <>
    <SocialLink href="https://www.instagram.com/corvobianco.pizza/" rel="noopener noreferrer" target="_blank">
      <FaInstagram />
    </SocialLink>
    <SocialLink href="https://www.facebook.com/corvobianco.pizza/" rel="noopener noreferrer" target="_blank">
      <FaFacebookSquare />
    </SocialLink>
    <SocialLink href="https://www.twitter.com/@CorvoPizza" rel="noopener noreferrer" target="_blank">
      <FaTwitter />
    </SocialLink>
    {/* <SocialLink href="https://www.google.com" rel="noopener noreferrer" target="_blank">
      <FaRegEnvelope />
    </SocialLink> */}
  </>
)

export default SocialIcons
