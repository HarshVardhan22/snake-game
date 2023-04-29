import React from "react";
import styled from "styled-components";
import { Container, Text, SpanText, Button } from "../common-styled-components";
import DropDownWithPillSelection from "./dropdown-pill-selection";

const CategorySelection = ({ onBackButtonClick, onNextButtonClick }) => {
  return (
    <Container
      flexDirection={"column"}
      padding="2.5rem"
      alignItems={"start"}
      height="auto"
    >
      <Text fontSize="2rem" fontWeight="600" margin={"0 0 1rem 0"}>
        Tell us which categories fit your store
      </Text>
      <Text color="#494E5B" margin={"0 0 1.875rem 0"}>
        This is important to help the right creators find your brand.You can
        always update them later in settings.
      </Text>
      <Text fontSize="1.125rem" margin={"0 0 0.5rem 0"} fontWeight="600">
        Categories
      </Text>
      <DropDownWithPillSelection />
      <Text margin={"1.875rem 0 0.5rem 0"} fontSize="1.125rem" fontWeight="600">
        Tags
      </Text>
      <DropDownWithPillSelection />
      <Container
        width="100%"
        justifyContent="space-between"
        padding="1.875rem 0"
        height="auto"
      >
        <Button padding={"0.5rem 1.5rem"} width="45%" onClick={onBackButtonClick}>
          <SpanText color="#fff" margin="0.125rem 0 0 0.5rem">
            Back
          </SpanText>
        </Button>
        <Button padding={"0.5rem 1.5rem"} width="45%" onClick={onNextButtonClick}>
          <SpanText color="#fff" margin="0.125rem 0 0 0.5rem">
            Submit
          </SpanText>
        </Button>
      </Container>
    </Container>
  );
};

export default CategorySelection;

// ******  STYLED COMPONENTS  *******//
