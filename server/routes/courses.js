import express from 'express'

import {getCourses,
    getCourseBySearch,
    getCourse,
    createCourse,
    commentCourse,
    updateCourse,
    deleteCourse} from '../controllers/course.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', getCourses)
router.post('/', auth, createCourse)
router.patch('/:id', auth, updateCourse);
router.delete('/:id', auth, deleteCourse);
router.get('/search', getCourseBySearch);
router.get('/:id', getCourse);
router.post('/:id/commentCourse', commentCourse);





export default router