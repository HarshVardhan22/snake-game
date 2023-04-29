import React from "react";
import styled from "styled-components";
import { Container, Text, SpanText, Button } from "../common-styled-components";
import DropDownWithPillSelection from "./dropdown-pill-selection";

const CategorySelection = () => {
  return (
    <Container flexDirection = {"column"} alignItems={"start"} width = "75%">
      <Text fontSize="2rem" fontWeight="600" margin={"0.5rem 0"}>
        Tell us which categories fit your store
      </Text>
      <Text>
        This is important to help the right creators find your brand.You can
        always update them later in settings.
      </Text>
      <Text margin={"0.5rem 0"} fontSize="1.125rem" fontWeight="600">Categories</Text>
      <DropDownWithPillSelection/>
      <Text margin={"0.5rem 0"} fontSize="1.125rem" fontWeight="600">Tags</Text>
      <DropDownWithPillSelection/>
      <Container width="100%" justifyContent="space-between" padding="1.875rem 0">
        <Button padding={"0.5rem 1.5rem"} width="45%">Back</Button>
        <Button padding={"0.5rem 1.5rem"} width="45%">Submit</Button>
      </Container>
     
    </Container>     
  );
};

export default CategorySelection;

// ******  STYLED COMPONENTS  *******//
