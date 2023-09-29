import React, { useEffect, useState } from "react";

import { useSortedAndFilteredPosts, useSortedPosts } from "../../Hooks/usePost";
import useFetching  from "../../Hooks/useFetching";
import usePages from "../../Hooks/usePages";

import css from './PostsPage.module.css';

import PostList from "../../Components/PostList/PostList";
import Form from "../../Components/Form/Form";
import PostFilter from "../../Components/PostFilter/PostFilter";
import Modal from "../../Components/Modal/Modal";
import Button from "../../Components/Button/Button";
import { getAll } from "../../Components/PostServer/PostServer";
import Pagination from "../../Components/Pagination/Pagination";
import Error from "../../Components/Error/Error";
import Loader from '../../Components/Loader/Loader';

const PostsPage = () => {
  
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ select: '', search: '' });
  const [modal, setModal] = useState(false);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  
  const sortedPosts = useSortedPosts(posts, filter.select);
  const sortedAndSelectedPosts = useSortedAndFilteredPosts(sortedPosts, filter.search);
  const numberOfPages = usePages(totalCount, limit);


  const [fetchingPosts, isLoading, error] = useFetching( async () => {
    let posts = await getAll(limit, page);
    setTotalCount(posts.headers['x-total-count']);
    setPosts(posts.data)
  });

  useEffect(() => {
    fetchingPosts()
  }, []);

  useEffect(() => {
    fetchingPosts()
  }, [page])


  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  return (
    <div className={css.page}>
      <h1>Posts</h1>

      <div className={css.actions}>
        <Button name={ 'Add New Post'} type={'modal'} setModal={setModal} />
      
        <Modal visible={modal} setModal={setModal}>
          <Form addPost={addNewPost} setModal={setModal}/>
        </Modal>

        <PostFilter filter={filter} setFilter={setFilter} />

      </div>
      
      {isLoading && <Loader/>}

      {error && <Error />}
      
      
      {sortedAndSelectedPosts ?
        <PostList title={''} posts={sortedAndSelectedPosts} remove={removePost} isLoading={isLoading} />
        :
        <h2>No Posts Founded</h2>
      }

      <Pagination numberOfPages={numberOfPages} setPage={setPage} page={page} />
      
    </div>
  );
}

export default PostsPage;