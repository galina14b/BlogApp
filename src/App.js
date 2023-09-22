import React, {useState} from "react";
import PostList from "./Components/PostList/PostList";
import css from './App.module.css';
import Form from "./Components/Form/Form";
import PostFilter from "./Components/PostFilter/PostFilter";
import Modal from "./Components/Modal/Modal";
import Button from "./Components/Button/Button";
import { useSortedAndFilteredPosts, useSortedPosts } from "./Hooks/usePost";

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
  const [filter, setFilter] = useState({ select: '', search: '' });
  const [modal, setModal] = useState(false);
  
  const sortedPosts = useSortedPosts(posts, filter.select);
  const sortedAndSelectedPosts = useSortedAndFilteredPosts(sortedPosts, filter.search);


  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  return (
    <div className={css.app}>
      <h1>Daily Planner</h1>

      <Button name={ 'Add New Post'} type={'modal'} setModal={setModal} />

      
      <Modal visible={modal} setModal={setModal}>
        <Form addPost={addNewPost} setModal={setModal}/>
      </Modal>
      
      
      <PostFilter filter={filter} setFilter={setFilter} />

      {sortedAndSelectedPosts && <PostList title={"Tasks for Today"} posts={ sortedAndSelectedPosts } remove={removePost} />}
    </div>
  );
}

export default App;
