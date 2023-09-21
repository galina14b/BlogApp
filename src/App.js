import React, {useState} from "react";
import PostList from "./Components/PostList/PostList";
import css from './App.module.css';
import Form from "./Components/Form/Form";
import Select from "./Components/Select/Select";

function App() {
  
  const [posts, setPosts] = useState([
    {
      id: 'id-1',
      title: 'How To Learn React',
      body: 'Lorem dkf;dkv kdldk;ckdl ;kdlfldjld ksjdljlfj',
    },

    {
      id: 'id-2',
      title: 'A To Learn HTML',
      body: 'Borem dkf;dkv kdldk;ckdl ;kdlfldjld ksjdljlfj',
    },

    {
      id: 'id-3',
      title: 'Now To Learn JS',
      body: 'Aorem dkf;dkv kdldk;ckdl ;kdlfldjld ksjdljlfj',
    },
  ]);
  const [selectedValue, setSelectValue] = useState('');

  const sortPosts = (value) => {
    setSelectValue(value);
    setPosts([...posts].sort((a,b) => a[value].localeCompare(b[value])))
  }

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  return (
    <div className={css.app}>

      <Form addPost={addNewPost} />

      <Select options={[
        { value: 'title', name: 'According to title' },
        { value: 'body', name: 'According to body' },
      ]}
        optionChange={sortPosts}
        value={ selectedValue} />

      <PostList title={"Tasks for Monday"} posts={ posts } remove={removePost} />
    </div>
  );
}

export default App;
