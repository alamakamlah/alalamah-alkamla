import express from 'express'

import {getTests, createTest, deleteTest, updateTest, getTestsBySearch, getTest} from '../controllers/tests.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', getTests)
router.post('/', auth, createTest)
router.patch('/:id', auth, updateTest);
router.delete('/:id', auth, deleteTest);
router.get('/search', getTestsBySearch);
router.get('/:id', getTest);




export default router