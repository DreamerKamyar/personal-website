import { NavLink } from "react-router-dom";
import styled from "styled-components";
const About = styled(NavLink)`
  color: ${(props) => props.theme.text};

  text-decoration: none;
  z-index: 1;
`;
export default About;
