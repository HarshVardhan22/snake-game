import React from 'react'
import styled from 'styled-components'

import { Container } from './common-styled-components'

const Header = () => {
  return (
    <Container>
        <Logo src={""}/>

        <Email>Need Help? Email admin@hashcypher.dev</Email>
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
    height: 100%;
    padding: 2.5rem;
`

const Logo = styled.img`
    width: 6.75rem;
    height: 1rem;
    object-fit: contain;
`

const Email = styled.p`
    font-family: 'sans-serif';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 140%;
    color: #494E5B;
`

