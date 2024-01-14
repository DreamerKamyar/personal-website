import React from "react";
import styled from "styled-components";
const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 0.6rem;
  z-index: 3;

  transition: 1.5s ease-in-out;
`;
const LogoComponent = ({ click }) => {
  return <Logo click={click}>SB</Logo>;
};

export default LogoComponent;
