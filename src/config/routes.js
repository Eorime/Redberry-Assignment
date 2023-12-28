import { routes } from "../constants/routes";
import BlogPage from "../pages/blogPage";
import Create from "../pages/createBlog";
import homePage from "../pages/homePage";
import NoPage from "../pages/noPage";

export const appRoutes = [
  {
    path: routes.Home,
    Component: homePage,
  },
  {
    path: routes.BlogPage,
    Component: BlogPage,
  },
  {
    path: routes.CreateBlog,
    Component: Create,
  },
  {
    path: routes.noPage,
    Component: NoPage,
  },
];
