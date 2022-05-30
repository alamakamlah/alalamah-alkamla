import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    title: String,
    user: {},
    subject: {},
    grade: {},
    term: {},
    type: String,
    desc: String,
    reviews: [String],
    ratings: [Object],
    favs: [String],
    system: Object,
    url: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    price: String,
    users: [String]
})

const Product = mongoose.model('Product', productSchema) 

export default Product