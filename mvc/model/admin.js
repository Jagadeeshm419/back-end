const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name:{
        type: String,
        required : [true, 'Name Is Must']
    },
    email:{
        type: String,
        required : [true, 'Email Is Must']
    },
    password:{
        type: String,
        required : [true, 'Password Is Must']
    }
})

module.exports = mongoose.model('AdminModel', adminSchema)