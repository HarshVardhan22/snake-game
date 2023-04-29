import React from 'react'

import { Container } from './common-styled-components'
import Header from './onboarding-header/onboarding-header'
import SlideSelector from './onboarding-slide-selector'

const Onboarding = () => {

    return (
        <Container padding="0" width="100%"  height="100vh" flexDirection="column" >
            <Header/>
            <Container padding=" 5rem 0rem" alignItems="start" background="#eeeeee" width="100%" height="100%">
            <SlideSelector currentSlide={1}/> 
            </Container>
          
        </Container>
    )
}

export default Onboarding


// ******  STYLED COMPONENTS  *******//



