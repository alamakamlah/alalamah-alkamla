import mongoose from 'mongoose'

const adSchema = mongoose.Schema({
    title: String,
    user: {},
    content: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    plan: {}
})

const Ad = mongoose.model('Ad', adSchema) 

export default Ad