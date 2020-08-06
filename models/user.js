const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    FullName:String,
    Location:String,
})

module.exports = mongoose.model('user',userSchema,'users')
