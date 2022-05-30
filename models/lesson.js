import mongoose from 'mongoose'

const lessonSchema = mongoose.Schema({
    title: String,
    user: {},
    subject: Object,
    grade: Object,
    term: Object,
    price: String,
    desc: String,
    system: Object,
    url: String,
    date: String,
    time: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    users: [String],
    favs: [String]
})

const Lesson = mongoose.model('Lesson', lessonSchema) 

export default Lesson