import React from "react";
import styled from "styled-components";

const ParticleComponent = (props) => {
  return (
    <Box>
      {/* <Particles
        params={props.theme === "light" ? configLight : configDark}
      ></Particles> */}
    </Box>
  );
};

export default ParticleComponent;

// styled component

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;
