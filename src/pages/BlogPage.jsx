import { useEffect, useState } from "react";
import AnchorComponent from "../components/BlogPage/Anchor";
import BlogCard from "../components/BlogPage/BlogCard";
import {
  MainContainer,
  Container,
  Center,
  Grid,
} from "../components/BlogPage/index";
import { LogoComponent, PowerButton, SocialIcons } from "../components/UI";

import { Blogs } from "../data/BlogData";
const BlogPage = () => {
  const [numbers, setNumbers] = useState();
  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  });
  return (
    <MainContainer>
      <Container>
        <LogoComponent></LogoComponent>
        <PowerButton></PowerButton>
        <SocialIcons></SocialIcons>
        <AnchorComponent numbers={numbers}></AnchorComponent>
        <Center>
          <Grid>
            {Blogs.map((blog) => {
              return <BlogCard key={blog.id} blog={blog}></BlogCard>;
            })}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
