import React from "react";
import styled from "styled-components";
import { Container } from "../common-styled-components";
const SliderUI = ({totalSlides,currentSlideCount}) => {
  return (
    <Container padding="0">
      {[...Array(totalSlides)].map((item, index) => {
        return (
          <SliderTab
            color={index + 1 > currentSlideCount ? "#EAECF0" : "#B07FFE"}
          />
        );
      })}
    </Container>
  );
};

export default SliderUI;

// ******  STYLED COMPONENTS  *******//


const SliderTab = styled.div`
  border-radius: 1rem;
  height: 0.25rem;
  width: 1rem;
  margin-right: 0.5rem;
  background-color: ${(props) => (props.color ? props.color : "#EAECF0")};
`;
