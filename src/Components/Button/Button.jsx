import css from './Button.module.css';

const Button = ({id, type, name, remove, setModal, handleClick}) => {

  return (
    <>
      {type === 'delete' &&
        <button onClick={() => remove(id)} className={css.btn}>{name}</button>
      }
    
      {type === 'modal' &&
        <button onClick={() => setModal(true)} className={css.btn_modal}>{name}</button>
      }

      {type === 'open' &&
        <button className={css.btn_open} onClick={() => handleClick()}>{name}</button>
      }
      
    </>
  )
}

export default Button;