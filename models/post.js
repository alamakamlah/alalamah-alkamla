import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    creator: String,
    subject: String,
    content: String,
    likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date()
    },
    comments: {
        type: [String],
        default: []
    },
    user: {}
})

const Post = mongoose.model('Post', postSchema) 

export default Post