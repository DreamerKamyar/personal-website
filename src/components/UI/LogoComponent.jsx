import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const Logo = styled(motion.h1)`
  display: inline-block;
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 0.6rem;
  z-index: 3;
  cursor: pointer;
`;
const LogoText = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  &:active {
    color: ${(props) => props.theme.text};
  }
`;
const LogoComponent = ({ click }) => {
  return (
    <Logo click={click} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <LogoText to={".."}>KR</LogoText>
    </Logo>
  );
};

export default LogoComponent;
