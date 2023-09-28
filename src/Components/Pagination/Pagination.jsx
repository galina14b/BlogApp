import usePagesArray from "../../Hooks/usePagesArray";
import css from './Pagination.module.css';

const Pagination = ({ numberOfPages, setPage, page }) => {
  const pagesArray = usePagesArray(numberOfPages);


  return (
    <div className={css.pagination}>
      <ul className={css['page-list']}>
        {pagesArray.map(item => {
          return (
            <li key={item}
                onClick={e => setPage(e.target.textContent)}
                className={item === +page ? css.active : css.item}>{item}
            </li>  
          )
        })}
      </ul>
    </div>
  )
}

export default Pagination;