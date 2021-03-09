const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    experience: {
        type: Number,
        default: 0
    },
    progress: {
        id: {
            type: Number,
            required: true
        }, 
        value: {
            type: Number,
            default: 0,
            required: true
        }
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User