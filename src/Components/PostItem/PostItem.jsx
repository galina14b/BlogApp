import React from "react";
import Button from "../Button/Button";
import css from './PostItem.module.css';

const PostItem = ({ id, title, body, remove }) => {

  return (
    <li className={css['list-item']}>
      
      <div className={css.content}>
        <div>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>

        <div>
          <Button type={'edit'} name={'Edit'} />
          <Button id={id} remove={remove} type={'delete'} name={'Delete'}/>
        </div>
      </div>

    </li>
  )
}

export default PostItem;