import mongoose from 'mongoose'

const requestSchema = mongoose.Schema({
    type: {},
    data: {}, 
    amount: String,
    selectedFile: String,
    phone: String,
    user: {},

})

const Request = mongoose.model('Request', requestSchema) 

export default Request