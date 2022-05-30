import express from 'express'
import {getUsers, updateUser, deleteUser, getUser, getUsersBySearch} from '../controllers/users.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', getUsers)
router.get('/search', getUsersBySearch)
router.patch('/:id', updateUser)
router.delete('/:id', auth, deleteUser)
router.get('/:id', getUser)


export default router