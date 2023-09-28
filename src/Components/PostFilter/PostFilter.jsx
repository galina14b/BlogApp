import Select from "../Select/Select";
import css from './PostFilter.module.css';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <>
      <input className={css.input} value={filter.search} type="text" onChange={(e) => setFilter({...filter, search: e.target.value})}></input>

      <Select options={[
        { value: 'title', name: 'According to title' },
        { value: 'body', name: 'According to body' },
      ]}
        optionChange={(e) => setFilter({...filter, select: e})}
        value={ filter.select} />
    </>
  )
}

export default PostFilter;