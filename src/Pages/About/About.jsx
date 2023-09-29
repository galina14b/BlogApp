import { useContext } from 'react';
import AuthContext from '../../Context/context';
import Login from '../Login/Login';
import css from './About.module.css';

const About = () => {
  const context = useContext(AuthContext);

  return (
    <div className={css.page}>
      <h1 className={css.title}>Welcome to Blog App</h1>
      <p>Here you can find a lot of works and comments to them. Sort posts, delete or add your own. 
        If you want to start - log in.
      </p>

      {!context.isAuth && <Login/>}
    </div>
  )
}

export default About;