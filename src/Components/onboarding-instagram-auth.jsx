import React from "react";
import styled from "styled-components";

import { Container, Text, SpanText, Button } from "./common-styled-components";

import { FaInstagram } from "react-icons/fa";

const InstagramAuth = ({ onButtonClick }) => {
  return (
    <Container flexDirection={"column"} justifyContent="start" width="37.5rem" height="19.688rem">
      <Text fontWeight={600} fontSize={"2rem"} margin="0 0 1rem 0">
        Great, first we need your brand`s Instagram handle
      </Text>
      <SpanText color= "#494E5B"  margin="0 0 2rem 0">
        This is the exact handle we're going to require creators to tag when
        they post about your brand, so be sure to double check it. You can
        always update this later in settings.
      </SpanText>
      <Button justifyContent="space-around"  height="fit-content" padding={"0.5rem 1.5rem"} onClick={onButtonClick}>
        <FaInstagram size={"1rem"}/>
        <SpanText color= "#fff" margin="0.125rem 0 0 0.5rem">
        Connect Instagram
      </SpanText>
      </Button>
    </Container>
  );
};

export default InstagramAuth;

// ******  STYLED COMPONENTS  *******//
