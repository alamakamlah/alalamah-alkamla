import express from 'express'

import {getProducts, commentProduct, createProduct, deleteProduct, updateProduct, getProductsBySearch, getProduct} from '../controllers/products.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', getProducts)
router.post('/', auth, createProduct)
router.patch('/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);
router.get('/search', getProductsBySearch);
router.get('/:id', getProduct);
router.post('/:id/commentProduct', commentProduct);




export default router