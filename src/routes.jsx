import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectPage from "./pages/ProjectPage";
import BlogPage from "./pages/BlogPage";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "about",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "skills",
    element: <SkillsPage></SkillsPage>,
  },
  {
    path: "projects",
    element: <ProjectPage></ProjectPage>,
  },
  {
    path: "blog",
    element: <BlogPage></BlogPage>,
  },
 
]);
export default routes;
