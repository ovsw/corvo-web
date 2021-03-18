import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { TiWarning } from 'react-icons/ti'
import BlockContent from './block-content'

// images
import PaintedWoodTexture2 from '../images/h4-slide-33.jpg'
import PizzaPlaceholder from '../images/Margareets3.png'

// elements
import Container from '../ui/Container'
import BigTitle from '../ui/BigTitle'

// styles
import { StyledLink } from '../ui/Button'

const HeroHeading = styled(BigTitle)`
  ${tw`text-4xl md:text-5xl xl:text-5xl mt-2`}
`

const GrubHubLink = styled.a`
  ${tw`inline-block px-6 py-4 pt-6 text-lg md:text-xl uppercase font-typewritter mb-4`};
  color: white;
  text-shadow: 0 0 3px #ded1c1;
  background-color: ${props => (props.alternate ? '#2e7c87' : 'red')};
  border-radius: 10px;
  box-shadow: #c1611f 0px 0px 14px;
  cursor: pointer;
`

const SectionStyled = styled.section`
  background-image: url(${PaintedWoodTexture2});
  background-size: cover;
  ${tw`md:py-12 relative overflow-hidden`};
  @media (min-width: 600px) {
    background-position: 70% 0%;
  }
  @media (min-width: 900px) {
    background-position: top right;
  }
`
// const FireGradient = styled.div`
//   ${tw`absolute w-1/3 h-full`};
//   top: 0;
//   right: 0;
//   /* background: linear-gradient(-90deg, #80000052 0%, #ffc71900 100%); */
//   background: url(${Firelight}) no-repeat top right;
//   background-size: cover;
// `
const LeftCol = styled.div`
  ${tw`flex flex-col justify-center items-center md:items-start`};
  ${tw`w-full md:w-3/5 lg:w-2/5`};
  ${tw`py-6 lg:pt-0 pl-2 pr-2 md:pl-6 md:pr-0`};
  ${tw`text-center md:text-left`};
`
const RightCol = styled.div`
  ${tw`w-full md:w-2/5 lg:w-1/2  text-center relative`};
  ${tw`py-2 px-2`};
  padding-bottom: 200px;
  @media (min-width: 900px) {
    ${tw`py-2 px-2`};
    min-height: 600px;
  }
  img {
    ${tw`absolute`};
    left: 1rem;
    @media (min-width: 600px) {
      left: 2rem;
      width: 500px;
      max-width: 1000%;
    }
    @media (min-width: 900px) {
      ${tw`static`};
      width: 800px;
      max-width: 100%;
    }
  }
`
const Intro = styled.p`
  ${tw`uppercase font-typewritter text-xl  text-orange-dark pt-2`};
  text-shadow: rgba(251, 29, 37, 0.86) 0px 0px 16.49px;
`

const Paragraph = styled.div`
  ${tw`leading-normal mb-1  text-lg font-typewritter mt-3`};
  color: #ccc;
  span {
    background-color: black;
    ${tw`p-1`};
  }
  ${props => (props.second ? 'margin-top: 2rem' : '')}
`
const IconWrapper = styled.span`
  color: red;
`

const Hero = ({ heroText, hoursOfOperation, onlineOrdersOpen }) => (
  <SectionStyled>
    {/* <FireGradient /> */}
    <Container>
      <div className=" flex flex-col md:flex-row items-center md:items-start lg:items-center  text-white">
        {/* left col */}
        <LeftCol className="LeftCol">

          {onlineOrdersOpen && (
            <div>
              <HeroHeading>Online Orders Open</HeroHeading>
              <GrubHubLink
                href="https://www.toasttab.com/corvo-bianco/v3"
                target="_blank"
                rel="noopener noreferrer"
                alternate
              >
                <span>Place Pick-up Order Online </span>
              </GrubHubLink>
            </div>
          )}

          {!onlineOrdersOpen && (
            <div>
              <HeroHeading>Currently Sold Out for Online Orders</HeroHeading>
              <Paragraph>
              Please check back tomorrow.
              </Paragraph>
            </div>
          )}

          <Intro className="Intro">All items are scratch-made, stock is limited, we close when we sell out.</Intro>
          <Paragraph>
          <BlockContent blocks={hoursOfOperation} />
          </Paragraph>
          {/* <Paragraph>
            <span>Delivery</span>
          </Paragraph> */}
          {/* <GrubHubLink
            href="https://grubhub.com/restaurant/corvo-bianco-490-us-19-alt-palm-harbor/1711255?classicAffiliateId=%2Fr%2Fw%2F1711255%2F&utm_source=kitchen.grubhub.com&utm_medium=OOL&utm_campaign=order%20online&utm_content=1711255"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Delivery (GrubHub)</span>
          </GrubHubLink> */}

          {heroText && (
          <Paragraph>
            <BlockContent blocks={heroText} />
          </Paragraph>
          )}

          

          
          <Paragraph second>
            <span>
               Beer, wine or cider goes great with pizza.
              <br />
              View HOB's menu here:
            </span>
          </Paragraph>
          <br></br>
          <GrubHubLink
            href="https://www.toasttab.com/hob-brewing-co/v3"
            target="_blank"
            rel="noopener noreferrer"
            alternate
          >
            <span>Order HOB Beer Online</span>
          </GrubHubLink>
        </LeftCol>
        {/* right col */}
        <RightCol className="RightCol">
          {/* prod image */}
          <img src={PizzaPlaceholder} alt="placeholder" />
        </RightCol>
      </div>
    </Container>
  </SectionStyled>
)

export default Hero
