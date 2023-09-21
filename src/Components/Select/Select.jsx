
const Select = ({value, optionChange, options}) => {
  return (
    <select onChange={(event) => optionChange(event.target.value)}>
      <option disabled value={value}>Сортувати за...</option>
      {options.map(item => <option key={item.value} value={item.value}>{ item.name}</option>)}
    </select>
  )
}

export default Select;