import mongoose from 'mongoose'

const testSchema = mongoose.Schema({
    title: String,
    user: {},
    questions: [Object],
    subject: {},
    grade: {},
    term: {},
    createdAt: {
        type: Date,
        default: new Date()
    },
    users: [String],
    solutions: [Object],
    system: Object

})

const Test = mongoose.model('Test', testSchema) 

export default Test