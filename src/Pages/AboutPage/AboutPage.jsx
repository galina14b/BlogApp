import { useContext } from 'react';
import AuthContext from '../../Context/context';
import Login from '../../Components/Login/Login';
import css from './AboutPage.module.css';

const AboutPage = () => {
  const context = useContext(AuthContext);

  return (
    <div className={css.page}>
      <div className={css.icon}></div>
      <h1 className={css.title}>Welcome to Blog App</h1>
      <p>Here you can find a lot of works and comments to them. Sort posts, delete or add your own. 
        If you want to start - log in.
      </p>

      {!context.isAuth && <Login/>}
    </div>
  )
}

export default AboutPage;