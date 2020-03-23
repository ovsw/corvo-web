import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
// import Icon from '../../ui/icons'

import config from '../../../config/website'

// components
import MainNav from './MainNav'
import TopBar from './TopBar'

// images
import LogoRoundImage from '../../images/corvo-bianco-logo-badge.png'
import BgDark from '../../images/bgd.jpg'
import ChalkBorderSource from '../../images/chalk-square2.png'

// elements
import Container from '../../ui/Container'

// styles
const StyledHeader = styled.div`
  ${tw`relative`};
  z-index: 9999;
  border-image: url(${ChalkBorderSource}) 70 repeat;
  border-bottom: 5px solid black;
  background: url(${BgDark});
`
const LogoWrapper = styled.div`
  width: 100px;
  @media (min-width: 600px) {
    width: 150px;
  }
  @media (min-width: 900px) {
    width: 250px;
  }
`
const Logo = styled.img`
  height: 100px;
  ${tw`lg:px-4 pt-1`};
  position: absolute;
  top: -15px;
  @media (min-width: 600px) {
    height: 140px;
    top: -50px;
    left: 5px;
  }
  @media (min-width: 900px) {
    height: 150px;
    top: -50px;
    left: 25px;
  }
  @media (min-width: 1200px) {
    height: 160px;
    top: -50px;
    left: 25px;
  }
`
const Line = styled.div`
  ${tw`absolute border-t-2 w-4 lg:w-24`};
  top: 50%;
  right: 0;
  border-top: 5px solid white;
  border-image: url(${ChalkBorderSource}) 70;
  border-image-repeat: round;
  border-image-outset: 0.5;
`

const Header = () => (
  <StyledHeader>
    <TopBar />
    <Container>
      <nav className="bg-gray-800 mt-0 w-full">
        <div className="mx-auto flex items-stretch ">
          <div className="flex flex-none md:items-center relative ">
            <Line />
            <LogoWrapper>
              <Link className="no-underline" to="/">
                <Logo src={LogoRoundImage} alt={`${config.siteTitle} Logo`} />
              </Link>
            </LogoWrapper>
          </div>

          <div className="flex flex-1 xl:pr-0 content-center justify-center">
            <MainNav />
          </div>
        </div>
      </nav>

      {/* <button onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button> */}
    </Container>
  </StyledHeader>
)

export default Header
