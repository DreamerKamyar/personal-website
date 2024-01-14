import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: 1rem;
  text-decoration: none;
  z-index: 1;
  transform: translate(-50%, -50%) rotate(90deg);
`;
export default Blog;
