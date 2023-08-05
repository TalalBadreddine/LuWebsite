const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello Jeff")
})

app.get('/about', (req, res) => {
    res.send("this thing accually worked ?")
})

const port = 5000
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})