import express from 'express'

import {getPosts, createPost, commentPost, deletePost, updatePost, getPostsBySearch, likePost, getPost} from '../controllers/posts.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', getPosts)
router.post('/', auth, createPost)
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.post('/:id/commentPost', commentPost);
router.get('/search', getPostsBySearch);
router.patch('/:id/likePost', auth, likePost);
router.get('/:id', getPost);




export default router