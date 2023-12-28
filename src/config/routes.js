import { routes } from "../constants/routes";
import BlogPage from "../pages/blogPage/blogPage";
import Create from "../pages/createBlog/createBlog";
import homePage from "../pages/homePage/homePage";
import NoPage from "../pages/noPage/noPage";

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
