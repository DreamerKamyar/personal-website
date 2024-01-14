import styled from "styled-components";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;
export default MainContainer;
