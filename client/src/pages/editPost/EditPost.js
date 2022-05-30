import React, {useState} from 'react'
import {Navbar, Footer} from '../../sections'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {updatePost} from '../../actions/posts'
import './editpost.css'
import { Navigate } from 'react-router-dom'
import {AdIcon} from '../../components'

const EditPost = () => {
  const {post, posts} = useSelector((state) => state.posts)
  const [postData, setPostData] = useState({
    title: post.title,
    subject: post.subject,
    content: post.content
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updatePost(post._id, { ...postData }));
    navigate(`/forum/${post._id}`)
  }
  return (
    <>
      <Navbar />
      <AdIcon />
      <div className="edit-post-container" >
        <div className="edit-post-heading">
          <h1>Edit Post</h1>
          <div className="divider" />
        </div>
        <div className="edit-post-form">
            <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Title" value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} />
                  <select value={postData.subject} onChange={(e) => setPostData({...postData, subject: e.target.value})}>
                      <option>Maths</option>
                      <option>Arabic</option>
                      <option>English</option>
                      <option>Science</option>
                      <option>Any</option>
                  </select>
                  <textarea placeholder="Content" value={postData.content} onChange={(e) => setPostData({...postData, content: e.target.value})} />
                  <button className="button-primary" type="submit">Submit</button>
              </form>
        </div>
      </div>
      <Footer />
      </>
  )
}

export default EditPost