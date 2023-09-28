import React from "react";
import PostItem from "../PostItem/PostItem";
import css from './PostList.module.css';

const PostList = ({ title, posts, remove }) => {
  
  return (
    <div className={css.posts}>
      <h2>{title}</h2>

      <ul className={css.list}>
        {posts.map(item => {
          return <PostItem key={item.id} id={item.id} title={item.title} body={item.body} remove={ remove} />
        })}
      </ul>
    </div>
  ) 
}

export default PostList;