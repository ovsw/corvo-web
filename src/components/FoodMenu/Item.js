import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
// import Img from 'gatsby-image'
// import { buildImageObj, cn, getBlogUrl } from '../../lib/helpers'
// import { imageUrlFor } from '../../lib/image-url'

// images
import hand from '../../images/icons/hand.svg'
import ChalkBorderSource from '../../images/chalk-square2.png'

const Dots = styled.span`
  ${tw`border-b-4 border-dotted border-grey w-6 flex-1 relative`};
  bottom: 5px;
`
const ItemName = styled.span`
  ${tw`text-2xl xl:text-3xl pr-4 relative`};
  bottom: 0px;

  background: url(${hand}) no-repeat center left;

  background-size: 3.5rem;
  padding-left: 4rem;

  span {
    /* border-bottom: 1px solid white; */
    border-bottom: 5px solid black;
    border-image: url(${ChalkBorderSource}) 70 repeat;
  }
`
const ItemLink = styled(Link)`
  &:hover .itemName {
    color: rgba(224, 118, 40, 1);
    background-position: 5px 50%;
  }
`

const FoodMenuItem = ({ item: { name, slug, mainImage, ingredients, price } }) => (
  <>
    {/* {console.log(slug)} */}
    <ItemLink
      to={`/menu/${slug.current}`}
      className="w-full lg:w-1/2 text-center text-white pb-12 px-2 lg:px-6 md:px-12"
    >
      <span className="flex">
        <ItemName className="itemName">
          <span>{name}</span>
        </ItemName>
        <Dots />
        <span className="text-2xl xl:text-3xl pl-4"> ${price}</span>
      </span>
      <span className="block fpmt-normal text-grey-dark text-base tracking-wide text-left mt-2 font-typewritter pl-16 w-full inline-block pt-4">
        {ingredients}
      </span>
      {/* <span className="mt-6 mb-4 rounded-full bg-red-400 inline-block overflow-hidden"> */}
      {/* <img
        src={imageUrlFor(buildImageObj(mainImage))
          .width(200)
          .height(Math.floor((1 / 1) * 200))
          .url()}
        alt={name}
      /> */}

      {/* {!mainImage.crop && <Img fixed={mainImage.asset.fixed} /> } */}
      {/* </span> */}
    </ItemLink>
  </>
)

export default FoodMenuItem
