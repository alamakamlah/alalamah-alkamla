import express from 'express'
import {signin, signup, googleSignUp, fbSignup} from '../controllers/user.js'

const router = express.Router()

router.post('/signin', signin)
router.post('/signup', signup)
router.post('/googlesignup', googleSignUp)
router.post('/fbSignup', fbSignup)

export default router