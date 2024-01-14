import { useState } from "react";
import { motion } from "framer-motion";
import {
  MainContainer,
  Contact,
  Container,
  Blog,
  Projects,
  BottomBar,
  Skills,
  About,
  Center,
  DarkDiv,
} from "../components/MainPage/SubComponent/index";
import {
  LogoComponent,
  SocialIcons,
  PowerButton,
  Intro,
} from "../components/MainPage";
import { YinYang } from "../components/AllSVG";

const HomePage = () => {
  const [Click, setClick] = useState(false);

  const centerButtonClickHandler = () => {
    setClick(!Click);
  };
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent click={Click} />
        <SocialIcons theme={Click ? "dark" : "light"}></SocialIcons>
        <Contact to={"mailto:kamyarrasolzade@gmail.com"} target="_blank">
          <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Say hi...
          </motion.h3>
        </Contact>
        <Blog to={"blog"}>
          <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Blog
          </motion.h3>
        </Blog>
        <Projects to={"Projects"} click={Click}>
          <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Projects
          </motion.h3>
        </Projects>
        <DarkDiv click={Click}></DarkDiv>
        <Center click={Click} onClick={centerButtonClickHandler}>
          <YinYang fill={"currentColor"}></YinYang>
          <h4>click me </h4>
        </Center>
        <BottomBar>
          <Skills to={"skills"} click={Click}>
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Skills
            </motion.h3>
          </Skills>
          <About to={"about"}>
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About
            </motion.h3>
          </About>
        </BottomBar>
      </Container>
      {Click && <Intro click={Click}></Intro>}
    </MainContainer>
  );
};

export default HomePage;
