import React, { useState } from 'react'

import { Container } from './common-styled-components'
import Header from './onboarding-header/onboarding-header'
import SlideSelector from './onboarding-slide-selector'

const Onboarding = () => {
    const [currentSlideCount, setCurrentSlideCount] = useState(1);
    return (
        <Container padding="0" width="100%"  height="100vh" flexDirection="column" >
            <Header currentSlideCount={currentSlideCount}/>
            <Container padding=" 5rem 1rem" alignItems="start" background="#eeeeee" width="100%" height="100%">
            <SlideSelector currentSlide={currentSlideCount}  setCurrentSlideCount={setCurrentSlideCount}/> 
            </Container>
          
        </Container>
    )
}

export default Onboarding


// ******  STYLED COMPONENTS  *******//



