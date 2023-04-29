import React, { useState } from 'react'
import styled from 'styled-components'

import {  Image, Text } from '../common-styled-components'
import Slider from './onboarding-header-slide-count'

import credpostLogo from "../../credpostLogo.png"

const Header = () => {
  const [currentSlideCount, setCurrentSlideCount] = useState(1);
  return (
    <Container>
        <Image src={credpostLogo} width={"6.75rem"} height={"auto"}/>
        <Slider totalSlides={3} currentSlideCount={currentSlideCount}/>
        <Text>Need Help? Email admin@hashcypher.dev</Text>
    </Container>
  )
}

export default Header


// ******  STYLED COMPONENTS  *******//

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* height: 100%; */
    padding: 2.5rem;
`


