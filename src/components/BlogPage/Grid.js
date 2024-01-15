import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vh), 1fr));
  gap: 3rem;
`;

export default Grid;
