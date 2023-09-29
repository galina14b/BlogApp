import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import AuthContext from '../../Context/context';
import css from './Login.module.css';

const Login = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  function login(event) {
    event.preventDefault();
    context.setIsAuth(true);
    localStorage.setItem('auth', 'true');
    navigate('/posts');
  }

  return (
    <form className={css.form} onSubmit={(event) => login(event)}>
      <h2 className={css.title}>Please, log in to see posts</h2>
      <input type="email" className={ css.input } placeholder={'Your email...'} />
      <input type="password" className={ css.input } placeholder={'Your password...'}/>
      <button type="submit" className={css.btn}>Log In</button>
    </form>
  )
}

export default Login;