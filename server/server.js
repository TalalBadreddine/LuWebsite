const express = require('express')
const cors = require('cors')

const mongoose = require('./mongoDbConfig')
const secrets = require('./secrets')

const userAuthRouter = require('./Routers/userAuth')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hjiii')
})

app.use('/users' ,userAuthRouter)

app.listen(secrets.PORT, () => {
    console.log(`server is running on http://localhost:${secrets.PORT}`)
})