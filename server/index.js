import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'
import userRoutes from './routes/user.js'
import productRoutes from './routes/products.js'
import requestRoutes from './routes/requests.js'
import usersRoutes from './routes/users.js'
import lessonRoutes from './routes/lessons.js'
import libraryRoutes from './routes/library.js'
import courseRoutes from './routes/courses.js'
import testRoutes from './routes/tests.js'
import adRoutes from './routes/ads.js'

const app = express()


app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/posts', postRoutes)
app.use('/user', userRoutes)
app.use('/products', productRoutes)
app.use('/requests', requestRoutes)
app.use('/users', usersRoutes)
app.use('/lessons', lessonRoutes)
app.use('/library', libraryRoutes)
app.use('/courses', courseRoutes)
app.use('/tests', testRoutes)
app.use('/ads', adRoutes)

app.get('/', (req, res) => {
    res.send("App Is Running")
})

const CONNECTION_URL = "mongodb+srv://Alalamah_alkamla:abcd_123@cluster0.8vqgo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`))).catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false)