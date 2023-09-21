import React, {useState} from "react";

const Form = ({ addPost }) => {

  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  function createNewPost(event) {
    event.preventDefault();
    addPost({ id: new Date(), ...post });
    setPost({title: '', body: ''})
  }

  return (
    <form onSubmit={createNewPost}>
      <input
          type="text"
          placeholder="Input title"
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}  
        />
        
        <input
          type="text"
          placeholder="Input text"
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}  
        />
        
        <button type="submit">Add</button>
    </form>
  )
}

export default Form;