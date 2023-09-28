import About from "../Pages/About/About";
import Post from "../Pages/Post/Post";
import Posts from "../Pages/Posts/Posts";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";


const privateRouters = [
  {
    id: "id-1",
    path: "/",
    component: <About/>,
    exact: 'true'
  },
  {
    id: "id-2",
    path: "/posts",
    component: <Posts/>,
    exact: 'true'
  },
  {
    id: "id-3",
    path: "/posts/post/:id",
    component: <Post/>,
    exact: 'true'
  },
  {
    id: "id-4",
    path: "*",
    component: <Error/>,
    exact: 'true'
  },
];

const publicRouters = [
  {
    id: "id-1",
    path: "/",
    component: <About/>,
    exact: 'true'
  },
  {
    id: "id-2",
    path: "/posts",
    component: <Login/>,
    exact: 'true'
  },
  {
    id: "id-2",
    path: "*",
    component: <Error/>,
    exact: 'true'
  },
]

export {privateRouters, publicRouters};