import React from "react";
import styled from "styled-components";
import { Container, Text, SpanText, Button } from "../common-styled-components";

const CategorySelection = () => {
  return (
    <Container>
      <Text fontSize="2rem" fontWeight="600">
        Tell us which categories fit your store
      </Text>
      <Text>
        This is important to help the right creators find your brand.You can
        always update them later in settings.
      </Text>
    </Container>     
  );
};

export default CategorySelection;

// ******  STYLED COMPONENTS  *******//
