import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'
// import { F } from 'react-icons/fa'
// icons
import { colors } from '../../../tailwind'
import SVG from '../SVG'

// import { tsModuleBlock } from '@babel/types'
// elements
import Container from '../../ui/Container'
import HpSection from '../../ui/HpSection'

const BoxWrapper = styled.div`
  ${tw`w-full md:w-1/2 lg:w-1/3 md:px-6 flex flex-col flex-grow flex-shrink`};
  border: 1px dashed #a29180;
  border-width: 0 2px 2px 0;

  &:nth-child(1),
  &:nth-child(2) {
    border-width: 2px 2px 2px 0;
  }

  @media (min-width: 900px) {
    &:nth-child(1),
    &:nth-child(2) {
      border-width: 0px 2px 2px 0;
    }
    &:nth-child(3n) {
      border-width: 0 0 2px 0;
    }
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(5) {
      border-width: 0 2px 0 0;
    }
    &:last-child {
      border-width: 0;
    }
  }
`
const SectionTitle = styled.h2`
  ${tw`text-center font-chalk uppercase text-5xl md:text-6xl leading-none`};
  text-shadow: rgb(150, 50, 50) 0px 0px 1px, rgb(28, 151, 151) 4px 4px 1px;
  @media (min-width: 600px) {
    text-shadow: rgb(150, 50, 50) 0px 0px 1px, rgb(28, 151, 151) 5px 6px 0px, rgba(28, 151, 151, 0.5) 5px 6px 10px;
  }
  span {
    text-shadow: none;
    ${tw`block font-typewritter lowercase text-xl mt-4 mb-2`};
    strong {
      ${tw`underline`};
    }
  }
`
const IntroPara = styled.p`
  ${tw`text-center font-typewritter text-lg md:text-xl px-2 mt-8 max-w-lg mx-auto leading-loose`};
  span {
    line-height: 2rem;
    ${tw`py-2 px-2`};
    /* background-color: rgba(28, 151, 151, 0.6); */
    /* background-image: linear-gradient(
      190deg,
      rgba(193, 97, 31, 0.15),
      rgba(193, 97, 31, 0.5) 100%,
      rgba(193, 97, 31, 0.25)
    ); */
  }
`
const Card = styled.div`
  ${tw`flex-1 flex flex-wrap no-underline  relative `};
  padding-top: 150px;
  h3 {
    ${tw`w-full font-chalk font-bold text-4xl text-grey-darker px-6 mb-6 text-center`};
    color: rgb(28, 151, 151);
    text-shadow: rgb(150, 50, 50) 0px 0px 0px, rgb(28, 151, 151) 0px 0px 1px;
  }
  strong {
    color: #ce6a25;
  }
`

const contentMap = [
  {
    title: 'Ready in 3 minutes or less',
    text:
      "The Wood-fired oven is crazy-hot. Pies are done in about 3 minutes or less. <strong>Best enjoyed fresh from the oven </strong> or re-heated beforehand, if you're looking for that crispy goodness!",
    icon: 'fast',
  },
  {
    title: 'Charred spots are good!',
    text:
      'Due to the high heat, the crust will have dark spots - like a leopard :) This is <strong>not only normal but also desirable</strong>, as it adds to the flavor.',
    icon: 'oven',
  },
  {
    title: '1 Pizza serves 1 Person',
    text:
      'Smaller than the normal pizza, <strong>one pizza/person is the average portion</strong>... unless you have a gigantic appetite - in which case, get two :)',
    icon: 'one',
  },
  {
    title: 'Fold 2 Hold (and eat)',
    text:
      'Your call: <strong>fold the whole pizza</strong> to eat on the go like a savage, or <strong>sit down with cutlery</strong> like a civilized human. ',
    icon: 'pizza',
  },

  {
    title: 'ONLY Premium Ingredients',
    text:
      'Fior di Latte Mozzarella <strong>made daily</strong>, <strong>authentic imported</strong> San Marzano Tomatoes, <strong>Caputo 00 Flour</strong>, Italian Sea Salt, <strong>Organic Fresh, Non-GMO Local</strong> ingredients ... ',
    icon: 'quality',
  },
  {
    title: 'A healthier Balance',
    text:
      '<strong>Zero sugar. Suitable even for gluten-sensitive people</strong>. A careful balance among crust, sauce, and cheese allows you to savor all 3 components.',
    icon: 'balance',
  },
]

const Highlights = () => (
  <HpSection>
    <Container>
      <SectionTitle>
        <span>"Neo-what Pizza?"</span> Neapolitan <br />
        <span>
          [ nee-uh-<strong>paa</strong>-luh-tn ]
        </span>
      </SectionTitle>
      <IntroPara>
        <span>
          Originating from Neapole (Naples) in Italy, Neapolitan Pizza may prove quite different than what you're used
          to. Here's what to expect:
        </span>
      </IntroPara>
      <div className=" mx-auto flex flex-wrap pt-8 pb-6">
        {contentMap.map(item => (
          <BoxWrapper key={item.title}>
            <Card>
              <SVG icon={item.icon} fill="#c1611f" left="37%" top="10%" width={24} />
              <h3>
                <span>{item.title}</span>
              </h3>
              {/* <Line /> */}
              <p
                className="text-grey-darkest text-lg leading-loose px-6 mb-6 font-typewritter"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </Card>
            {/* <div className="flex-none mt-auto bg-white overflow-hidden p-6 border border-t-0">
              <div className="flex items-center justify-start">
                <button
                  type="button"
                  className="mx-auto lg:mx-0 hover:underline gradient text-gray-800 font-bold rounded-full border border-gray-600 my-6 py-4 px-8"
                >
                  learn more
                </button>
              </div>
            </div> */}
          </BoxWrapper>
        ))}
      </div>
    </Container>
  </HpSection>
)

export default Highlights
