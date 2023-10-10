import css from './Button.module.css';

const Button = ({id, type, name, remove, setModal, handleClick}) => {

  return (
    <>
      {type === 'delete' &&
        <button onClick={() => remove(id)} className={css.btn}></button>
      }
    
      {type === 'modal' &&
        <button onClick={() => setModal(true)} className={css.btn_modal}></button>
      }

      {type === 'open' &&
        <button className={css.btn_open} onClick={() => handleClick()}></button>
      }
      
    </>
  )
}

export default Button;