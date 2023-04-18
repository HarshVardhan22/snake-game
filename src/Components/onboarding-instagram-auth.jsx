import React from "react";
import styled from "styled-components";

import { Container, Text, SpanText, Button } from "./common-styled-components";

import { FaInstagram } from "react-icons/fa";

const InstagramAuth = ({ headingText, subText, onButtonClick }) => {
  return (
    <Container flexDirection={"column"}>
      <Text fontWeight={600} font-size={"2rem"}>
        {headingText}
      </Text>
      <SpanText>{subText}</SpanText>
      <Button onClick={onButtonClick}>
        <FaInstagram />
      </Button>
    </Container>
  );
};

export default InstagramAuth;

// ******  STYLED COMPONENTS  *******//
