import styled from "styled-components";
import { SubContainer } from "../SubComponent";

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba} , 0.6)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;
export default Container;
