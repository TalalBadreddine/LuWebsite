const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Hello Jeff")
})

app.get('/about', (req, res) => {
    res.send("About")
})

const port = 5000
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})