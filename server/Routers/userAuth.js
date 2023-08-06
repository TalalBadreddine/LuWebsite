const express = require('express')
const User = require('../Models/userSchema')

const router = express.Router()

router.post('/addUser', (req, res) => {

    const {name, age, gender, email, password} = req.body

    console.log(name)
    console.log(age)    

    const newUser = new User({
        name: name,
        age: age,
        gender,
        email,
        password
    })

    newUser.save()

    res.send(`Added new user ${name}, ${age}, ${gender}, ${email}, ${password}`)

})

module.exports = router