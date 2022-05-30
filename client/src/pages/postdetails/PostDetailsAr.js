import React, {useEffect, useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {NavbarAr, FooterAr} from '../../sections'
import {FaTrash, FaRegEdit} from 'react-icons/fa'
import { getPost, deletePost, commentPost } from '../../actions/posts'
import moment from 'moment' 
import { AdIconAr } from '../../components'

import './postdetails.css'



const PostDetailsAr = ({isEnglish, setIsEnglish}) => {
  
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
         
      <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <AdIconAr />
      {isDelete && 
            <div className="is-delete-modal slit-in-vertical">
              <h4>هل أنت متأكد أنك تريد حذف هذا المنشور؟</h4>
              <div className="is-delete-modal-actions">
                <button className="button-primary" onClick={handleDelete}>حذف المنشور</button>
                <button className="button-secondary" onClick={() => {setIsDelete(false)}}>الغاء</button>
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
            <div className="post-details-reader-actions" style={{flexDirection: "row-reverse"}}>
                <div className="post-details-comment-input" >
                    <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="text" placeholder="أضف تعليق" value={comment} onChange={(e) => setComment(e.target.value)} />
                    <button style={{  fontFamily: "var(--font-family-arabic)"}} className="button-primary" disabled={!comment.length} onClick={handleComment}>تعليق</button>
                </div>
            </div>
            }
            <div className="comment-section" style={{flexDirection: "row-reverse"}}>
                {post?.comments?.map((c, i) => (
                    <div key={i} >
                        <h6>{c.split(': ')[0]} :</h6>
                        <p>{c.split(':')[1]}</p>
                    </div>
                ))}
            </div>
        </div>
     
      <FooterAr />
      </div>
    
  )
}

export default PostDetailsAr