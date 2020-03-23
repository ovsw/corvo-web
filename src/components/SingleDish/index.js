import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { graphql, useStaticQuery } from 'gatsby'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

import BlockContent from '../block-content'

// images
import BlackBoardBgImage from '../../images/10295.jpg'

// components
import Highlights from '../Highlights'

// elements
import Container from '../../ui/Container'
import BigTitle from '../../ui/BigTitle'

// images
import ChalkBorderSource from '../../images/chalk-square.png'
import PaintedWoodTexture2 from '../../images/h4-slide-33.jpg'

const DarkWrapper = styled.section`
  background: url(${PaintedWoodTexture2});
  background-position: top right;
  background-size: cover;
  ${tw`text-white relative  overflow-hidden`};
  padding-top: ${props => (props.normalImagePosition ? '2rem' : '140px')};
  ${tw`pb-12 md:py-12 px-8 xl:px-0`};

  @media (min-width: 374px) {
    padding-top: ${props => (props.normalImagePosition ? '2rem' : '190px')};
  }

  @media (min-width: 600px) {
    padding-top: 4rem;
  }

  @media (min-width: 1200px) {
    padding-top: 2rem;
  }

  h1 {
    ${tw`font-chalk`};
  }
  .category {
    ${tw`font-typewritter`};
    color: #c1611f;
    text-shadow: rgba(251, 29, 37, 0.86) 0px 0px 16.49px;
  }
`
const StyledArticle = styled.article`
  ${tw`block md:flex`};
`
const LeftColumn = styled.div`
  padding-top: ${props =>
    props.normalImagePosition ? tw`w-full xl:w-1/2 xl:pt-12 xl:pl-12` : tw`w-full md:w-2/3 xl:w-1/2 xl:pt-12 xl:pl-12`};

  .category {
    ${tw`text-3xl`};
  }
  .ingredients {
    ${tw`font-typewritter md:text-2xl leading-normal pb-4 xl:pr-12`};
    color: #b7b7b7;
  }
`
const Story = styled.div`
  ${tw`font-typewritter leading-loose pt-4 md:pr-12`};
  border-top: 5px solid white;
  border-image: url(${ChalkBorderSource}) 70 repeat;
  border-image-outset: 2px;
  ${tw`mb-8`};
`
const RightColumn = styled.div`
  padding-top: ${props =>
    props.normalImagePosition
      ? tw`w-full xl:w-1/2 md:relative text-center md:ml-8`
      : tw`w-full md:w-1/3 xl:w-1/2 md:relative text-center`};

  img {
    position: ${props => (props.normalImagePosition ? 'static' : 'absolute')};
    left: 0%;
    width: 100%;
    top: -210px;
    max-width: 100%;

    @media (min-width: 374px) {
      left: 50%;
      width: 400px;
      margin-left: ${props => (props.normalImagePosition ? '0' : '-200px')};
    }

    @media (min-width: 400px) {
      top: -220px;
    }

    @media (min-width: 600px) {
      left: 0;
      width: 700px;
      max-width: 1000%;
      margin-left: 0;
    }
    @media (min-width: 1200px) {
      top: -2rem;
    }
  }
`
const StyledBigHeading = styled(BigTitle)`
  ${tw`text-4xl md:text-5xl xl:text-6xl`};
`
const StyledSubHeading = styled(BigTitle)`
  ${tw`text-4xl xl:text-5xl`};
`
const SingleDish = ({
  dish: { id, name, mainImage, ingredients, price, _rawBody },
  category = 'No Category',
  suffix = 'No suffix',
  normalImagePosition = false,
}) => {
  const data = useStaticQuery(
    graphql`
      query currMenuIdsQuery {
        currentMenuIds: sanityMenuSettings {
          savoryPizzaCurrMenu {
            id
          }
          dessertPizzaCurrMenu {
            id
          }
          pucciaCurrMenu {
            id
          }
          insalateCurrMenu {
            id
          }
        }
      }
    `
  )

  // grab the ids of all dishes from the current menu
  // this will return an array of arrays if ids - one sub-array for each menu category
  const currMenuIdsinCategoriesArr = Object.values(data.currentMenuIds).map(arrayOfObjects =>
    arrayOfObjects.map(object => object.id)
  )

  // merge all category arrays into one, so we can run indexOf(curentDishId) on it later
  // to see if the current dish is in the menu or not
  const currMenuIdsArr = [].concat(...currMenuIdsinCategoriesArr)

  // returns true if the current dish is on the current menu
  const isDishOnMenu = currMenuIdsArr.indexOf(id) > -1

  // console.log(isDishOnMenu)
  return (
    <>
      <DarkWrapper normalImagePosition={normalImagePosition}>
        <Container>
          <StyledArticle>
            <LeftColumn>
              <p className="category">{category}</p>
              <StyledBigHeading priority="1" hot>
                <span style={{ textDecoration: !isDishOnMenu ? 'line-through' : 'none' }}>
                  {name} {suffix}
                </span>
              </StyledBigHeading>
              {/* <p className="category">{!isDishOnMenu && 'Not currently on the menu. Check Back Later?'}</p> */}

              <StyledSubHeading priority="2" className="price">
                {isDishOnMenu ? `$${price}` : 'Not available :('}
              </StyledSubHeading>
              <p className="ingredients">{ingredients}</p>
              <Story>{_rawBody && <BlockContent blocks={_rawBody} />}</Story>
            </LeftColumn>
            <RightColumn normalImagePosition={normalImagePosition}>
              {mainImage && mainImage.asset && (
                <img
                  src={imageUrlFor(buildImageObj(mainImage))
                    // .width(600)
                    // .height(Math.floor((16 / 16) * 600))
                    // .fit('crop')
                    .auto('format')
                    .url()}
                  alt={mainImage.alt}
                />
              )}
            </RightColumn>
          </StyledArticle>
        </Container>
      </DarkWrapper>
      <Highlights />
    </>
  )
}

export default SingleDish
