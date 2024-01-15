import { DarkTheme } from "../components/Theme";
import styled, { ThemeProvider, keyframes } from "styled-components";
import astronaut from "../assets/Images/spaceman.png";
import { LogoComponent, PowerButton, SocialIcons } from "../components/UI";
import ParticleComponent from "../components/UI/ParticleComponent";
const SkillsPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme={"dark"}></LogoComponent>
        <SocialIcons theme={"dark"}></SocialIcons>
        <PowerButton></PowerButton>
        <ParticleComponent theme="dark"></ParticleComponent>
        <SpaceMan>
          <img src={astronaut} alt="" />
        </SpaceMan>
        <Main>
          I'm a front-end developer located in India. I love to create simple
          yet beautiful websites with great user experience. I'm interested in
          the whole frontend stack Like trying new things and building great
          projects. I'm an independent freelancer and blogger. I love to write
          blogs and read books. I believe everything is an Art when you put your
          consciousness in it. You can connect with me via social links.
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default SkillsPage;

// styled components

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(10px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubutntu Mono", monospace;
  font-style: italic;
`;

const float = keyframes`

0%{
  transform: translateY(-10px);
}
50%{
  transform: translateY(15px) translateX(15px);
}
100%{
  transform: translateY(-10px);
}

`;

const SpaceMan = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
`;
