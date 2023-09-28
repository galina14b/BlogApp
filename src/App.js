import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import css from './App.module.css';
import NavBar from "./Components/NavBar/NavBar";
import AuthContext from "./Context/context";
import AppRouters from "./Routers/AppRouters";


function App() {

  const [isAuth, setIsAuth] = useState(false);
  
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, [])
  
  return (
    <div className={css.app}>
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>

        <BrowserRouter basename="/BlogApp">
          <NavBar />
          <AppRouters/>
        </BrowserRouter>

      </AuthContext.Provider>
    </div>
  );
}

export default App;
