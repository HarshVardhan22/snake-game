import React from "react";
import styled from "styled-components";
import { Container } from "../common-styled-components";
const SliderUI = ({totalSlides,currentSlideCount}) => {
  return (
    <Container>
      {[...Array(totalSlides)].map((item, index) => {
        return (
          <SliderTab
            color={index + 1 > currentSlideCount ? "red" : "#3e3e3e"}
          />
        );
      })}
    </Container>
  );
};

export default SliderUI;

// ******  STYLED COMPONENTS  *******//


const SliderTab = styled.div`
  height: 0.25rem;
  width: 1rem;
  margin-right: 0.5rem;
  background-color: ${(props) => (props.color ? props.color : "#3e3e3e")};
`;
