import React, {useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {Post} from '../../components'
import { getPosts } from '../../actions/posts'

import './posts.css'

const Posts = ({ setCurrentId }) => {
  
 

  const posts = useSelector((state) => state.posts.posts);

  if (!posts.length) return 'No posts';

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <Post 
          key={post._id}
          post={post}
        />
      ))}
    </div>
  )
}

export default Posts