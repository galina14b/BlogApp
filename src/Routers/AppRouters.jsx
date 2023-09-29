import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import AuthContext from "../Context/context";
import { publicRouters, privateRouters } from "./Routers"

const AppRouters = () => {
  const context = useContext(AuthContext);

  return (
    <>
    {context.isAuth ?
          <Routes>
          
          {privateRouters.map(route => {
            return <Route key={route.id} exact={route.exact} path={route.path} element={route.component} />
          })}

        </Routes>
          :
        <Routes>
          
          {publicRouters.map(route => {
            return <Route key={route.id} exact={route.exact} path={route.path} element={route.component} />
          })}

        </Routes>}</>
  )
}

export default AppRouters;