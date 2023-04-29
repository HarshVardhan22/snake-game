import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: ${(props) => props.flexDirection ? props.flexDirection : "row"};
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => props.alignItems ? props.alignItems : "center"};
  padding: ${(props) => (props.padding ? props.padding : "1rem")};
  margin: ${(props) => (props.margin ? props.margin : "0rem")};
  width: ${(props) => (props.width ? props.width : "fit-content")};
  height: ${(props) => (props.height ? props.height : "100%")};
`;
export const Text = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-family: ${(props) => props.fontFamily ? props.fontFamily : "sans-serif"};
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : "500"};
  line-height: ${(props) => props.lineHeight ? props.lineHeight : "140%"};
  color: ${(props) => (props.color ? props.color : "#3e3e3e")};
  padding: ${(props) => (props.padding ? props.padding : "0rem")};
  margin: ${(props) => (props.margin ? props.margin : "0rem")};
`;
export const SpanText = styled.span`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-family: ${(props) => props.fontFamily ? props.fontFamily : "sans-serif"};
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : "500"};
  line-height: ${(props) => props.lineHeight ? props.lineHeight : "140%"};
  color: ${(props) => (props.color ? props.color : "whitesmoke")};
  padding: ${(props) => (props.padding ? props.padding : "0rem")};
  margin: ${(props) => (props.margin ? props.margin : "0rem")};
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.height ? props.height : "1rem")};
  margin: ${(props) => (props.margin ? props.margin : "0rem")};
  padding:  ${(props) => (props.padding ? props.padding : "0 1.5rem")};
  width: ${(props) => (props.width ? props.width : "fit-content")};
  height: ${(props) => (props.height ? props.height : "100%")};
  color: ${(props) => (props.color ? props.color : "whitesmoke")};
  background:${(props) => (props.background ? props.background : "#3e3e3e")};
  border-radius: 0.25rem;
`;

export const Image = styled.img`
  width: ${(props) => (props.width ? props.width : "1rem")};
  height: ${(props) => (props.height ? props.height : "1rem")};
  object-fit: ${(props) => (props.objectFit ? props.objectFit : "contain")};
`
