import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Link } from 'gatsby'
import { FaPhone, FaEnvelope, FaMap, FaUniversalAccess } from 'react-icons/fa'

// images
import BgDark from '../images/bgd.jpg'
import MulinoCaputoLogo from '../images/farine-caputo-logo.png'
import CiaoLogo from '../images/ciao-logo.png'
import ChalkBorderSource from '../images/chalk-square2.png'

// components
import SocialLinks from './SocialLinks'

// elements
import Container from '../ui/Container'

const FooterStyled = styled.footer`
  z-index: 900;
  ${tw`text-white pt-12 relative`};
  border-image: url(${ChalkBorderSource}) 70 repeat;
  border-top: 5px solid white;
  background: url(${BgDark});
`
const FooterColumns = styled.div`
  ${tw`md:flex`};
`
const LeftCol = styled.div`
  ${tw`md:w-2/3 text-center md:text-left px-4 pb-8 md:pl-12`};
  border-image: url(${ChalkBorderSource}) 70 repeat;
  @media (min-width: 600px) {
    border-right: 5px solid white;
  }
  h3 {
    ${tw`font-chalk text-5xl mb-2 md:mb-0 `};
  }
  p {
    ${tw`font-typewritter leading-normal`};
  }
  .contact {
    ${tw`my-2`};
    br {
      ${tw`md:hidden`};
    }
    a {
      ${tw`md:mr-6`};
    }
  }
  .address {
    ${tw`my-2`};
  }

  svg {
    ${tw`relative text-2xl mr-2`};
    top: 4px;
  }
`
const Tagline = styled.p`
  ${tw`px-4 pb-8 md:px-2 md:pb-2 md:pt-4`};
  border-image: url(${ChalkBorderSource}) 70 repeat;
  border-bottom: 5px solid white;
`
const RightCol = styled.div`
  ${tw`md:w-1/3 text-center`};
  a img {
    width: 160px;
    ${tw`mr-4`};
  }
  a:last-child img {
    ${tw`mr-0`};
  }
`
const SocialLinksWrapper = styled.div`
  ${tw`mb-8`};
  svg {
    ${tw`text-4xl`};
  }
`
const Copyright = styled.p`
  ${tw`text-center text-grey py-2 mt-8`};
  background: rgba(28, 151, 151, 0.24);
  border-image: url(${ChalkBorderSource}) 70 repeat;
  border-top: 5px solid white;
  br {
    ${tw`md:hidden`};
  }
`
const Footer = ({ footerText }) => (
  <FooterStyled>
    <Container>
      <FooterColumns>
        <LeftCol>
          <h3>Corvo Bianco Wood Fired Pizza</h3>
          <Tagline>Authentic Neapolitan Wood Fired Pizza Truck</Tagline>
          <Tagline>
            Veteran owned and operated.{' '}
            <strong style={{ color: '#e07628' }}>
              10% off for all first responders, veterans and active duty military
            </strong>
            .
          </Tagline>
          <p className="address">
            <FaMap /> {footerText}
          </p>

          <p className="contact">
            <a href="tel:914-733-2475">
              <FaPhone /> (914) 733 2475
            </a>{' '}
            <br />{' '}
            <a href="mailto:info@corvobianco.pizza">
              <FaEnvelope /> info@corvobianco.pizza
            </a>
            <br />{' '}
            <Link to="/ada-compliance/">
              <FaUniversalAccess /> ADA Compliance
            </Link>
          </p>
        </LeftCol>
        <RightCol>
          <SocialLinksWrapper>
            <SocialLinks />
          </SocialLinksWrapper>
          <a href="http://www.mulinocaputo.it/en/flour" rel="noopener noreferrer" target="_blank">
            <img src={MulinoCaputoLogo} alt="Mulino Caputo Logo" />
          </a>
          <a href="https://www.compagniamercantiledoltremare.com/" rel="noopener noreferrer" target="_blank">
            <img src={CiaoLogo} alt="Ciao Logo" />
          </a>
        </RightCol>
      </FooterColumns>
    </Container>
    <Copyright>
      Copyright &copy; {new Date().getFullYear()} Corvo Bianco. <br />{' '}
      <Link to="/privacy-policy-tos">Provacy Policy and Terms of Service</Link> Website by{' '}
      <a href="https://ovswebsites.com">OVS Websites</a>.
    </Copyright>
  </FooterStyled>
)

export default Footer
