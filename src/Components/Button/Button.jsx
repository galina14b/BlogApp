import css from './Button.module.css';

const Button = ({id, type, name, remove}) => {

  return (
    <>
      {type === 'delete' ?
        <button onClick={() => remove(id)} className={css[type] + ' ' + css.btn}>{name}</button>
        :
        <button className={css[type] + ' ' + css.btn}>{name}</button>
      }
    
      
    </>
  )
}

export default Button;