import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import AuthContext from "../../Context/context";
import css from './NavBar.module.css';


const NavBar = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  function logOut() {
    context.setIsAuth(false);
    localStorage.removeItem('auth');
    navigate('/');
  }

  return (
    <div className={css.navbar}>
      <nav className={css.nav}>

        <ul className={css.list}>
          <li className={css["list-item"]}>
            <NavLink to='/' className={({ isActive }) =>
              isActive ? css.active : css.link 
            }>About</NavLink>
          </li>

          {context.isAuth && <li className={css["list-item"]}>
            <NavLink to='/posts' className={({ isActive }) =>
              isActive ? css.active : css.link
            }>Posts</NavLink>
          </li>}
          
          {context.isAuth && <li className={css["list-item"]}>
            <button onClick={logOut} className={css.btn}>Log Out</button>
          </li>}
        </ul>
        
      </nav>
    </div>
  )
}

export default NavBar;