import React, {useEffect, useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Navbar, Footer} from '../../sections'
import {FaTrash, FaRegEdit} from 'react-icons/fa'
import { getPost, deletePost, commentPost } from '../../actions/posts'
import moment from 'moment' 
import { AdIcon } from '../../components'

import './postdetails.css'



const PostDetails = ({isEnglish, setIsEnglish} ) => {
  
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

    const {post, posts} = useSelector((state) => state.posts)
    const dispatch = useDispatch();
    const [isDelete, setIsDelete] = useState(false)
    const user = JSON.parse(localStorage.getItem('profile'));
    const userId = user?.result.googleId || user?.result?._id;
    const [comment, setComment] = useState('')
    const isAuthorized = user?.result.email === "alalamahalkamla@gmail.com" || user?.result?.email === "for4future@gmail.com" || post?.user?._id === userId
    const navigate = useNavigate()
    const handleDelete = () => {
      dispatch(deletePost(post._id))
      navigate('/forum')
    }
  
    const handleComment = async () => {
        const newComments = await dispatch(commentPost(`${user?.result?.name}: ${comment}`, post._id));
    
        setComment('');
        window.location.reload()
      };

      
    if (!post) return null;

  
  return (
      <div className="post-details">
         
      <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <AdIcon />
      {isDelete && 
            <div className="is-delete-modal slit-in-vertical">
              <h4>Are you sure you want to delete this post?</h4>
              <div className="is-delete-modal-actions">
                <button className="button-primary" onClick={handleDelete}>Delete</button>
                <button className="button-secondary" onClick={() => {setIsDelete(false)}}>Cancel</button>
              </div>
            </div>
          }
        <div className="post-details-container">
          {isAuthorized && 
            <div className="post-details-creator-actions">
              <div className="delete-icon" onClick={() => setIsDelete(true)}><FaTrash /></div>
              {/* <div className="edit-icon" onClick={() => {navigate('./edit')}}><FaRegEdit /></div> */}
            </div>
          }
        
            <div className="post-details-heading">
                <h1>{post.title}</h1>
                <h4>{moment(post.createdAt).fromNow()}</h4>
            </div>
            <div className="post-details-creator">
                <h2>{post.user.name}</h2>
            </div>
            <div className="post-details-content">
                <p>
                    {post.content}
                </p>
            </div>
            {user && 
            <div className="post-details-reader-actions">
                <div className="post-details-comment-input">
                    <input type="text" placeholder="Add a comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                    <button className="button-primary" disabled={!comment.length} onClick={handleComment}>Comment</button>
                </div>
            </div>
            }
            <div className="comment-section">
                {post?.comments?.map((c, i) => (
                    <div key={i}>
                        <h6>{c.split(': ')[0]} :</h6>
                        <p>{c.split(':')[1]}</p>
                    </div>
                ))}
            </div>
        </div>
     
      <Footer />
      </div>
    
  )
}

export default PostDetails