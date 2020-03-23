import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

// images
import OldPaper from '../images/old-paper2.jpg'

const SectionStyled = styled.section`
${tw`pt-1 xl:pt-8`};
  background-color: #fffdf5;
  background: url('${OldPaper}');
  position: relative;
  z-index: 100;
`

const SawtoothBottom = styled.div`
  background-image: linear-gradient(135deg, #dccfbf 50%, transparent 50%),
    linear-gradient(225deg, #dccfbf 50%, transparent 50%);
  background-position: bottom left, bottom left;
  background-size: 24px 20px;
  background-repeat: repeat-x;
  ${tw`h-6 relative`};
  z-index: 100;
  bottom: -15px;
`
const SawtoothTop = styled.div`
  background-image: linear-gradient(45deg, #dccfbf 50%, transparent 50%),
    linear-gradient(-45deg, #dccfbf 50%, transparent 50%);
  background-position: bottom left, bottom left;
  background-size: 24px 20px;
  background-repeat: repeat-x;
  ${tw`h-6 relative`};
  z-index: 100;
  top: -25px;
  @media (min-width: 1200px) {
    top: -50px;
  }
`
const SawtoothTop2 = styled.div`
  background-image: linear-gradient(45deg, #505050 50%, transparent 50%),
    linear-gradient(-45deg, #505050 50%, transparent 50%);
  background-position: bottom left, bottom left;
  background-size: 24px 20px;
  background-repeat: repeat-x;
  ${tw`h-6 relative`};
  z-index: 90;
  top: -50px;
  @media (min-width: 1200px) {
    top: -75px;
  }
`

const HpSection = props => (
  <SectionStyled {...props}>
    <SawtoothTop />
    <SawtoothTop2 />
    {props.children}
    <SawtoothBottom />
  </SectionStyled>
)

export default HpSection
