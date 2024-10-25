const mongoose = require('mongoose')

const schemas = new mongoose.Schema({
    username: String,
    rollno: Number,
    email: String,
    phonenumber: Number,
    password: String,
    status: String,

})

const user = mongoose.model("studentdetails", schemas)

module.exports = user;