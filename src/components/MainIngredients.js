import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
// import HpSection from '../../ui/HpSection'
// import { SectionTitle } from '../../ui/Titles'

// images
import BlackBoardBgImage from '../images/10295.jpg'

// elements
import BigTitle from '../ui/BigTitle'

const MenuSection = styled.section`
  background: url(${BlackBoardBgImage});
  ${tw`text-white font-chalk relative pt-24`};
`
const MainTitle = styled(BigTitle)`
  ${tw`text-center`};
  margin-bottom: 4rem;
`
const MenuTitle = styled.h2`
  ${tw`text-white font-normal  text-center font-typewritter text-5xl`};
  /* @media (min-width: 600px) {
    position: absolute;
    transform: rotate(-20deg);
    left: 3rem;
    top: 5rem;
  }
  @media (min-width: 1200px) {
    left: 6rem;
    top: 7rem;
  } */
`

const CategoryTitle = styled(BigTitle)`
  ${tw`text-center`};
  margin-bottom: 4rem;
`
const Notes = styled.div`
  ${tw`flex flex-wrap`};
`
const Note = styled.div`
  ${tw`px-6  md:w-1/2`};
  ${tw`mb-6`};

  &:first-child {
    ${tw`w-full`};
  }

  ${tw`text-lg font-typewritter leading-normal text-grey`};
  h3 {
    ${tw`text-2xl mb-2`};
    color: rgba(224, 118, 40, 1);
  }
  p {
    ${tw`mb-4`};
  }
  strong {
    ${tw`text-white font-normal`};
  }
`

const FoodMenuShell = ({ savoryPizzas, dessertPizzas }) => (
  <MenuSection>
    <MainTitle priority="1">Main Ingredients:</MainTitle>
    <div className="container mx-auto flex flex-wrap pt-4 pb-12">
      <div className="w-full mb-4">
        <div className=" mx-auto w-64 opacity-25 my-0 py-0 rounded-t" />
      </div>

      <Notes>
        <Note>
          <h3>"The Dough"</h3>
          <p>
            Our dough is <strong>made in-house</strong>, following the{' '}
            <strong>authentic recipe and fermentation process</strong> that Neapolitan pizza is known for.
          </p>
          <p>
            Made with <strong>Italian imported Caputo “00” flour</strong>, produced in Naples, which uses the best wheat
            on the global market. The flour is finely milled, <strong>additive free and all natural</strong>. It is
            milled slowly and finely to provide the <strong>perfect balance of protein and gluten</strong>.
          </p>
          <p>
            All this makes for a dough that is{' '}
            <strong>delicate in the center, soft but perfectly crispy on the crust</strong>, with just the right bite
            and chew and a delicious flavor.
          </p>
          <p>
            Note: Altough <strong>gluten-sensitive people can still enjoy our Pizza</strong> in moderation because of
            its <strong>low gluten content</strong>, it's{' '}
            <strong>unfortunately not suitable for those gluten intolerant</strong>.
          </p>
        </Note>
        <Note>
          <h3>"The Sauce"</h3>
          <p>
            We use <strong>only authentic imported San Marzano Tomatoes D.O.P.</strong> for “the sauce”.
          </p>
          <p>
            These tomatoes grow in the volcanic soil at the base of Mt. Vesuvius, are known for their{' '}
            <strong>low sugar, seed, water content and acidity</strong>.
          </p>
          <p>
            {' '}
            We combine these delicious tomatoes with{' '}
            <strong>local (when possible) organic basil and Italian sea salt</strong>.
          </p>
        </Note>
        <Note>
          <h3>"The Cheese"</h3>
          <p>
            Our mozzarella cheese, also known as Fior di Latte, is made in-house daily, using the{' '}
            <strong>highest quality dairy</strong>.
          </p>
          <p>
            Fior di Latte Mozzarella is smooth, a little tangy in flavour, elastically textured, with{' '}
            <strong>superb melting characteristics that make it perfect for Pizza</strong>.
          </p>
          <p>
            <strong>It's very important that the Mozzarella is extremely fresh, </strong>that's why we make it in-house,
            each day!
          </p>
        </Note>
      </Notes>
    </div>
  </MenuSection>
)

export default FoodMenuShell
