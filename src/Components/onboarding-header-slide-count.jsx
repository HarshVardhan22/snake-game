import React from "react";
import styled from "styled-components";
import { Container, Text } from "./common-styled-components";
import SliderUI from "./onboarding-header-slider-ui";

const Slider = ({totalSlides,currentSlideCount}) => {

  return (
    <Container flexDirection={"column"}>
      <Container>
        <Text>Steps</Text>
        <SpanText>{currentSlideCount}</SpanText>
        <SpanText>/</SpanText>
        <SpanText>{totalSlides}</SpanText>
      </Container>
      <SliderUI totalSlides={totalSlides} currentSlideCount={currentSlideCount}/>
    </Container>
  );
};

export default Slider;

