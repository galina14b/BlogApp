import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import { getCommentsByPostId, getPostById } from '../../Components/PostServer/PostServer';
import useFetching from '../../Hooks/useFetching';
import css from "./Post.module.css";

const Post = () => {

  let params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [postFetching, postIsLoading, postError] = useFetching(async () => {
    const result = await getPostById(params.id);
    setPost(result.data);
  });
  const [commFetching, commIsLoading, commError] = useFetching( async () => {
    const result = await getCommentsByPostId(params.id);
    setComments(result.data);
  })

  useEffect(() => {
    postFetching();
    commFetching()
  }, [])



  return (
    <div className={css.page}>
      <h3 className={css.title}>Post</h3>

      {postError && <h3>No post</h3>}
      {postIsLoading && <Loader/>}

        
      {Object.keys(post).length && <div className={css.post}>

        <h3 className={css['post-title']}>{post.title}</h3>
        <p>{post.body}</p>
      </div>}

      <h3 className={css.title}>Comments</h3>

      {commError && <h3>No Comments</h3>}
      {commIsLoading && <Loader/>}

        
      {comments.length && <div className={css.comments}>

        {comments.map(item => {
          return <div key={item.id} className={css['comm-item']}>
            <h3 className={css['comm-title']}>{item.name}</h3>
            <p className={css['comm-email']}>{item.email}</p>
            <p>{item.body}</p>
          </div>
        })}
      </div>}
        
      
    </div>
  )
}

export default Post;