import styled, { keyframes } from "styled-components";

const rotate = keyframes`

from{
    transform: rotate(0);
}to{
    transform: rotate(360deg);
}

`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "86%" : "50%")};
  left: ${(props) => (props.click ? "86vw" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.7s ease-in-out;
  & > :first-child {
    transition: inherit;
    width: ${(props) => (props.click ? "120px" : "200px")};
    height: ${(props) => (props.click ? "120px" : "200px")};

    animation: ${rotate} infinite 1.5s linear;
  }
  & > :last-child {
    padding-top: 1rem;
    transition: inherit;

    opacity: ${(props) => (props.click ? 0 : 1)};
  }
`;
export default Center;
