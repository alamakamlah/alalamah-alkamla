import express from 'express'

import {getLibrary,
    getLibraryBySearch,
    getLibraryItem,
    commentLibrary,
    createLibrary,
    updateLibrary,
    deleteLibrary} from '../controllers/library.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', getLibrary)
router.post('/', auth, createLibrary)
router.patch('/:id', auth, updateLibrary);
router.delete('/:id', auth, deleteLibrary);
router.get('/search', getLibraryBySearch);
router.get('/:id', getLibraryItem);
router.post('/:id/commentLibrary', commentLibrary);





export default router