//imports 
require('dotenv').config() //environment setup
const express = require('express') //express package
const cors = require('cors') //cross origin resouce sharing allows non-origin api fetching which is usually blocked by browsers
const passport = require('passport') //passport package to authenticate users
require('./config/passport')(passport) //sets custom configuration for passport
const routes = require('./routes') //route directory to clean up requests

//set up app
const app = express() //setting express invocation on "app" variable
const PORT = process.env.PORT || 8000 //allows application to run on environment port OR localhost 8000

//middleware
app.use(express.urlencoded({ extended: false })) //form body parser
app.use(express.json()) //invoking automatic json parsing
app.use(cors()) //allowing CORS requests to bypass browser firewall
app.use(passport.initialize()) //starts passport package for auth

//API routes
app.get('/api/', (req, res) => {
    res.json({ name: 'nippon runner', greeting: 'irashaimase!', author: 'Jessica Au and Leo Brooks', message: 'built in part by utilizing SEIR111 mern auth back end template'})
})

app.use('/api/examples', routes.example)
app.use('/api/users', routers.user)

//server running
const server = app.listen(PORT, console.log(`🎧you are now tuned in to WSEI ${PORT} AM/FM radio🎧`))

module.exports = server