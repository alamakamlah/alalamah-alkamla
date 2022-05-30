import express from 'express'
import {getLessons, createLesson, deleteLesson, updateLesson, getLessonsBySearch, getLesson} from '../controllers/lessons.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', getLessons)
router.post('/', auth, createLesson)
router.patch('/:id', auth, updateLesson);
router.delete('/:id', auth, deleteLesson);
router.get('/search', getLessonsBySearch);
router.get('/:id', getLesson);




export default router