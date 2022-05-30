import mongoose from 'mongoose'

const courseSchema = mongoose.Schema({
    title: String,
    user: {},
    lessons: [{
        video: String,
        file: String
    }],
    subject: {},
    grade: {},
    term: {},
    system: Object,
    desc: String,
    reviews: [],
    ratings: [],
    createdAt: {
        type: Date,
        default: new Date()
    },
    price: String,
    users: [String]
})

const Course = mongoose.model('Course', courseSchema) 

export default Course