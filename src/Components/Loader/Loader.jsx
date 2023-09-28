import PuffLoader from "react-spinners/PuffLoader";
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <PuffLoader color="#e62b28"/>
    </div>
  )
}

export default Loader;