import React from "react";
import styled from "styled-components";
const SliderUI = ({totalSlides,currentSlideCount}) => {
  return (
    <>
      {Array.from(totalSlides).map((item, index) => {
        return (
          <SliderTab
            color={index + 1 > currentSlideCount ? "#e0e0e0" : "#3e3e3e"}
          />
        );
      })}
    </>
  );
};

export default SliderUI;

// ******  STYLED COMPONENTS  *******//


const SliderTab = styled.div`
  height: 0.25rem;
  width: 1rem;
  color: ${(props) => (props.color ? props.color : "#3e3e3e")};
`;
