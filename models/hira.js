const mongoose = require('mongoose')
const { Schema } = mongoose

const hiraSchema = new Schema ({
    //character
    ji: {
        type: String,
        required: true
    },
    //english
    romaji: {
        type: String,
        required: true
    },
    //number
    bango: {
        type: Number,
        required: true
    }
})

const Hira = mongoose.model('Hira', hiraSchema
)

module.exports = Hira