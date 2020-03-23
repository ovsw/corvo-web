import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
// import HpSection from '../../ui/HpSection'
// import { SectionTitle } from '../../ui/Titles'
import { whileStatement } from '@babel/types'
import FoodMenuList from './List'

// images
import BlackBoardBgImage from '../../images/10295.jpg'
import ChalkBorderSource from '../../images/chalk-square2.png'

// elements
import BigTitle from '../../ui/BigTitle'

const MenuSection = styled.section`
  background: url(${BlackBoardBgImage});
  ${tw`text-white font-chalk relative pt-12 md:pt-24`};
`

const MenuTitle = styled.h2`
  ${tw`text-white font-normal  text-center font-typewritter text-5xl`};
  /* @media (min-width: 600px) {
    position: absolute;
    left: 3rem;
    top: 5rem;
  }
  @media (min-width: 1200px) {
    left: 6rem;
    top: 7rem;
  } */
  span {
    display: block;
    font-size: 2rem;
  }
`

const CategoryTitle = styled(BigTitle)`
  ${tw`text-center`};
  margin-bottom: 4rem;
  span {
    ${tw`text-center text-2xl block lowercase mt-4`};
    text-shadow: rgba(224, 118, 40, 1) 3px 3px 1px;
  }
`

const IngredientsLink = styled.div`
  ${tw`mx-auto lg:w-1/2 my-0 py-0 text-center leading-normal mb-8 md:mt-8`};
  ${tw`text-xl`};

  span {
    border-bottom: 5px solid black;
    border-image: url(${ChalkBorderSource}) 70 repeat;
    ${tw`text-2xl`};

    &:first-child {
      ${tw`text-lg text-grey`};
    }
  }
`

const FoodMenuShell = ({ savoryPizzas, dessertPizzas, puccia, insalate }) => (
  <MenuSection>
    <MenuTitle>
      Our Menu for this week <span>(changes weekly)</span>
    </MenuTitle>
    <div className="container mx-auto flex flex-wrap pt-4 pb-12">
      <div className="w-full mb-4">
        <IngredientsLink>
          <Link to="/ingredients">
            <span>Learn about our Three Main Ingredients:</span> <br />
            <span style={{ color: 'red' }}>The Sauce</span>, <span style={{ color: '#ffcba5' }}>The Dough,</span>{' '}
            <span style={{ color: 'white' }}>The Cheese</span>
          </Link>
        </IngredientsLink>
      </div>

      <div className="w-fullp-6 flex flex-col flex-grow flex-shrink">
        <CategoryTitle hot centered>
          Savory Pizzas
        </CategoryTitle>
        <FoodMenuList items={savoryPizzas} />
        <CategoryTitle hot centered>
          Dessert Pizzas
        </CategoryTitle>
        <FoodMenuList items={dessertPizzas} />
        <CategoryTitle hot centered>
          Puccia
          <span>(sandwiches made on wood fired pizza dough bread)</span>
        </CategoryTitle>
        <FoodMenuList items={puccia} />
        <CategoryTitle hot centered>
          Salads
          <span>(served in wood fired pizza dough bowls)</span>
        </CategoryTitle>
        <FoodMenuList items={insalate} />
      </div>
    </div>
  </MenuSection>
)

export default FoodMenuShell
