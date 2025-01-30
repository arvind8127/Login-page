const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/Employee')
const bcrypt = require('bcrypt');
const app = express()
app.use(express.json())
app.use(cors())



mongoose.connect("mongodb://127.0.0.1:27017/employee");


app.post('/login', (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {

       
        if(user) {
            bcrypt.compare(password, user.password, (err, response) =>{
                if(err) {return  res.json("the password is incorrect")
                }
                    if(response) {
                        res.json("success")
                    }
            })
        } else {
            res.json("No record existed")
        }
    })
})

app.post('/register', (req, res) =>{
    const {name, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash =>{
        EmployeeModel.create({name, email, password: hash})
        .then(employee => res.json(employee))
        .catch(err => res.json(err))
    }) .catch(err => console.log(err.message))
   
})

// app.get('/', (req, res) =>{
//     console.log('hello')
//     return res.status(200).json('welcome')
// })

app.listen(3000, () => {
    console.log("server is running")
})