import React, { useState } from "react";
import styled from "styled-components";

import { Image, SpanText, Text } from "../common-styled-components";
import Slider from "./onboarding-header-slide-count";

import credpostLogo from "../../credpostLogo.png";

const Header = () => {
  const [currentSlideCount, setCurrentSlideCount] = useState(1);
  return (
    <Container>
      <Image src={credpostLogo} width={"6.75rem"} height={"auto"} />
      <Slider totalSlides={3} currentSlideCount={currentSlideCount} />
      <Text>
        Need Help? Email
        <MailLink href="mailto: admin@hashcypher.dev">
          <SpanText color="#9C5FFE" margin={"0 0.25rem"}>
            admin@hashcypher.dev
          </SpanText>
        </MailLink>
      </Text>
    </Container>
  );
};

export default Header;

// ******  STYLED COMPONENTS  *******//

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  /* height: 100%; */
  padding: 1rem;
`;

const MailLink = styled.a`
  text-decoration: none;
`;
