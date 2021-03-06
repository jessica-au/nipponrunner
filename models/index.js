require('dotenv').config()
const mongoose = require('mongoose')

const { DATABASE_URL } = process.env
const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(DATABASE_URL, configOptions)
    .then(() => console.log('MongoDB successfully connected...'))
    .catch(err => console.log('MongoDB connection error:', err))


// mongoose.connect(DATABASE_URL, configOptions)
//     .then(() => console.log('MongoDB successfully connected...'))
//     .catch(err => console.log('MongoDB connection error:', err))

module.exports = {
    User: require('./user'),
    Hira: require('./hira')
}