const mongoose = require('mongoose')

const secrets = require('./secrets')

const MONGODB_URI = `mongodb+srv://alikhaledabdallah454:${secrets.PASSWORD}@cluster0.kixkafi.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to Mongo DB"))
.catch(error => console.error('Error connecting to MongoDB:', error));

module.exports = mongoose