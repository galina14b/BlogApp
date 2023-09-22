import React, { useState } from "react";
import css from './Form.module.css';

const Form = ({ addPost, setModal }) => {

  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  function createNewPost(event) {
    event.preventDefault();
    addPost({ id: new Date(), ...post });
    setPost({ title: '', body: '' });
    setModal(false)
  }

  return (
    <form onSubmit={createNewPost} className={css.form}>
      <input
          className={css.input}
          type="text"
          placeholder="Input title"
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}  
        />
        
      <input
          className={css.input}
          type="textarea"
          placeholder="Input text"
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}  
        />
        
        <button className={css.btn} type="submit">Add</button>
    </form>
  )
}

export default Form;