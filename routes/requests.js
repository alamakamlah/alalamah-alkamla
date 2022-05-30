import {getRequests, createRequest, deleteRequest, getRequest} from '../controllers/requests.js'
import auth from '../middleware/auth.js'
import express from 'express'

const router = express.Router()

router.get('/', getRequests)
router.post('/', auth, createRequest)
router.get('/:id', getRequest)
router.delete('/:id', auth, deleteRequest)

export default router