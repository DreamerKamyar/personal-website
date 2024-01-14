import React from "react";
import styled from "styled-components";
import { PowerBtn } from "../AllSVG";
import { NavLink } from "react-router-dom";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-55%);
  background-color: #c0c0c0;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;
  z-index: 3;
  cursor: pointer;
  &:hover {
    background-color: rgba(106, 13, 173, 0.6);
    box-shadow: 0 0 8px 2px rgba(106, 13, 173, 0.5);
  }
  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;
const PowerButton = () => {
  return (
    <Power>
      <NavLink to={"/"}>
        <PowerBtn fill={"currentColor"}></PowerBtn>
      </NavLink>
    </Power>
  );
};

export default PowerButton;
