import css from './Select.module.css';

const Select = ({optionChange, options}) => {
  return (
    <select className={css.select} onChange={(event) => optionChange(event.target.value)}>

      {options.map(item => <option key={item.value} value={item.value}>{item.name}</option>)}
      
    </select>
  )
}

export default Select;