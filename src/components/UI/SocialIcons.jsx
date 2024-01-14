import React from "react";
import { NavLink } from "react-router-dom";
import { Github, LinkedIn } from "../AllSVG";
import styled from "styled-components";
import { DarkTheme } from "../Theme";
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
  transition: 1.5s ease-in-out;
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.theme === "dark" ? DarkTheme.text : DarkTheme.body};
  transition: 1.5s ease-in-out;
`;
const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <NavLink
          style={{
            color: "inherit",
          }}
          to="https://github.com/DreamerKamyar"
          target="_blank"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          ></Github>
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{
            color: "inherit",
          }}
          to="https://linkedin.com/in/kamyar-rasoolzade"
          target="_blank"
        >
          <LinkedIn
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          ></LinkedIn>
        </NavLink>
      </div>
      <Line theme={props.theme === "dark" ? "dark" : ""}></Line>
    </Icons>
  );
};

export default SocialIcons;
