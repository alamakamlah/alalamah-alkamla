import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    type: Object,
    password: String,
    phone: String,
    weeklyMessage: [String],
    grade: {type: Object, default: {}},
    term: {type: Object, default: {}},
    points: {type: Number, default: 150},
    library: {type: [String], default: []},
    id: String,
    system: Object
})

const User = mongoose.model('User', userSchema) 

export default User