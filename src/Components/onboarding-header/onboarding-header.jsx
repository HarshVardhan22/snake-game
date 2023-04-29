import React, { useState } from "react";
import styled from "styled-components";

import { Image, SpanText, Text } from "../common-styled-components";
import Slider from "./onboarding-header-slide-count";

import credpostLogo from "../../credpostLogo.png";

const Header = () => {
  const [currentSlideCount, setCurrentSlideCount] = useState(1);
  return (
    <Container>
      <FlexBlock justifyContent="start" width="20%" >
        <Image src={credpostLogo} width={"6.75rem"} height={"auto"} />
      </FlexBlock>
      <FlexBlock justifyContent="center" width="60%">
        <Slider totalSlides={3} currentSlideCount={currentSlideCount} />
      </FlexBlock>
      <FlexBlock justifyContent="end" width="20%">
        <Text>
          Need Help? Email
          <MailLink href="mailto: admin@hashcypher.dev">
            <SpanText color="#9C5FFE" margin={"0 0.25rem"}>
              admin@hashcypher.dev
            </SpanText>
          </MailLink>
        </Text>
      </FlexBlock>
    </Container>
  );
};

export default Header;

// ******  STYLED COMPONENTS  *******//

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  /* height: 100%; */
  padding: 1rem;
`;

const MailLink = styled.a`
  text-decoration: none;
`;

const FlexBlock = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  display: flex;
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : "start"};
  align-items: center;
`;
