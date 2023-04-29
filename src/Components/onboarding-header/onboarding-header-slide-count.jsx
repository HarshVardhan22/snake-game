import React from "react";
import styled from "styled-components";
import { Container, Text, SpanText } from "../common-styled-components";
import SliderUI from "./onboarding-header-slider-ui";

const Slider = ({totalSlides,currentSlideCount}) => {

  return (
    <Container flexDirection={"column"}>
      <Container padding="0">
        <Text>Steps</Text>
        <SpanText margin="0.5rem" color="#3e3e3e">{currentSlideCount}</SpanText>
        <SpanText color="#3e3e3e">/</SpanText>
        <SpanText  margin="0.5rem" color="#3e3e3e">{totalSlides}</SpanText>
      </Container>
      <SliderUI totalSlides={totalSlides} currentSlideCount={currentSlideCount}/>
    </Container>
  );
};

export default Slider;

