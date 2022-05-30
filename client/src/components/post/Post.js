import React, {useState} from 'react'
import './post.css'
import moment from 'moment' 
import {FaTrash, FaRegThumbsUp} from 'react-icons/fa'
import { deletePost, likePost } from '../../actions/posts'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Post = ({post}) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(post?.likes);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = post?.likes?.find((like) => like === userId);

  const isAuthorized = user?.result.email === "alalamahalkamla@gmail.com" || user?.result?.email === "for4future@gmail.com" || post?.user?._id === userId

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId)
        ? (
          <><FaRegThumbsUp fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><FaRegThumbsUp fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><FaRegThumbsUp fontSize="small" />&nbsp;Like</>;
  };

  const openPost = (e) => {
    navigate(`/forum/${post._id}`);
  };

  return (
    <div className="post-container" >
        <div className="post-heading" onClick={openPost}>
            <h3>{post.title}</h3>
            <p>{moment(post.createdAt).fromNow()}</p>
        </div>
        <div className="post-creator">
            <h4>{post?.user?.name}</h4>
        </div>
        
        <div className="post-content">
            <p>{post.content}</p>
        </div>
    </div>
  )
}

export default Post