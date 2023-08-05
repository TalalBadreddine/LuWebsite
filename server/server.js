const express = require('express')
const cors = require('cors')

const secrets = require('./secrets')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello Jeff")
})

app.get('/about', (req, res) => {
    res.send("this thing accually worked ?")
})

app.listen(secrets.PORT, () => {
    console.log(`server is running on http://localhost:${port}`)
})