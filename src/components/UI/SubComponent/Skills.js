import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Skills = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;

  transition: 1.5s ease-in-out;
`;
export default Skills;
