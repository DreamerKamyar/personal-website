import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Projects = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: 2.5rem;
  text-decoration: none;
  z-index: 3;
  transition: 1.5s ease-in-out;
  transform: translate(-50%, -50%) rotate(-90deg);
`;

export default Projects;
