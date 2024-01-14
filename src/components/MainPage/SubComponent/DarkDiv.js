import styled from "styled-components";
const DarkDiv = styled.div`
  /* display: ${(props) => (props.click ? "inline-block" : "none")}; */
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0")};
  height: ${(props) => (props.click ? "100%" : "0")};
  z-index: 1;
  background-color: ${(props) => props.theme.secondaryColor};
  transition: height 0.5s ease, width 1s ease 0.5s;
`;
export default DarkDiv;
