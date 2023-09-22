import css from './Button.module.css';

const Button = ({id, type, name, remove, setModal}) => {

  return (
    <>
      {type === 'delete' &&
        <button onClick={() => remove(id)} className={css[type] + ' ' + css.btn}>{name}</button>
      }
    
      {type === 'modal' &&
        <button onClick={() => setModal(true)} className={css[type] + ' ' + css.btn}>{name}</button>
      }
      
      {type === 'edit' &&
        <button className={css[type] + ' ' + css.btn}>{name}</button>
      }
      
    </>
  )
}

export default Button;