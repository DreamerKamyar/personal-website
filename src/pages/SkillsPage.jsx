import { LightTheme } from "../components/Theme";
import styled, { ThemeProvider } from "styled-components";
import { Design, Develope } from "../components/AllSVG";
import { LogoComponent, PowerButton, SocialIcons } from "../components/UI";
import ParticleComponent from "../components/UI/ParticleComponent";
const SkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box>
        <LogoComponent theme={"light"}></LogoComponent>
        <SocialIcons theme={"light"}></SocialIcons>
        <PowerButton></PowerButton>
        <ParticleComponent theme="light"></ParticleComponent>
        <Main>
          <Title>
            <Design width={40} height={40}></Design>
            Designer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>i like to Desing</strong>
            <ul>
              <li>Web desing</li>
              <li>mobile desing</li>
            </ul>
          </Description>
          <Description>
            <strong>tools</strong>
            <ul>
              <li>figma</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40}></Develope> Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>skills</strong>
            <p>
              Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase
              etc.
            </p>
          </Description>
          <Description>
            <strong>tools</strong>
            <p>VScode , Github , CodePen etc</p>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default SkillsPage;

// styled components
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubunta Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  &:hover,
  &:hover ${Description} {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
  cursor: pointer;
`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  gap: 1rem;
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
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
`;
