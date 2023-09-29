import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import css from './PostItem.module.css';

const PostItem = ({ id, title, body, remove }) => {

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/posts/post/${id}`)
  }

  return (
    <li className={css['list-item']}>
      
      <div className={css.content}>
        <div className={css.info}>
          <h3>#{id} {title}</h3>
          <p>{body}</p>
        </div>

        <div className={css.buttons}>
          <Button id={id} type={'open'} name={'Open'} handleClick={ handleClick} />
          <Button id={id} remove={remove} type={'delete'} name={'Delete'}/>
        </div>
      </div>

    </li>
  )
}

export default PostItem;