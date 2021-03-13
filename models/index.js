require('dotenv').config()
const mongoose = require('mongoose')

const { MONGO_URL } = process.env
const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

mongoose.connect(MONGO_URL, configOptions)
    .then(() => console.log('MongoDB successfully connected...'))
    .catch(err => console.log('MongoDB connection error:', err))

module.exports = {
    User: require('./user'),
    Hira: require('./hira')
}