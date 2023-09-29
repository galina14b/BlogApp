import AboutPage from "../Pages/AboutPage/AboutPage";
import PostPage from "../Pages/PostPage/PostPage";
import PostsPage from "../Pages/PostsPage/PostsPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const privateRouters = [
  {
    id: "id-1",
    path: "/",
    component: <AboutPage/>,
    exact: 'true'
  },
  {
    id: "id-2",
    path: "/posts",
    component: <PostsPage/>,
    exact: 'true'
  },
  {
    id: "id-3",
    path: "/posts/post/:id",
    component: <PostPage/>,
    exact: 'true'
  },
  {
    id: "id-4",
    path: "*",
    component: <ErrorPage/>,
    exact: 'true'
  },
];

const publicRouters = [
  {
    id: "id-1",
    path: "/",
    component: <AboutPage/>,
    exact: 'true'
  },
  {
    id: "id-2",
    path: "*",
    component: <ErrorPage/>,
    exact: 'true'
  },
]

export {privateRouters, publicRouters};