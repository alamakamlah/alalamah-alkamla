import mongoose from 'mongoose'

const librarySchema = mongoose.Schema({
    title: String,
    subject: {},
    grade: {},
    term: {},
    type: String,
    desc: String,
    system: Object,
    reviews: [],
    ratings: [],
    url: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    price: String,
    users: [String]
})

const Library = mongoose.model('Library', librarySchema) 

export default Library