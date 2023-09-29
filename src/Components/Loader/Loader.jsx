import PuffLoader from "react-spinners/PuffLoader";
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <PuffLoader color="#da5161"/>
    </div>
  )
}

export default Loader;