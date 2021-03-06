//imports 
require('dotenv').config() //environment setup
const express = require('express') //express package
const cors = require('cors') //cross origin resouce sharing allows non-origin api fetching which is usually blocked by browsers
const passport = require('passport') //passport package to authenticate users b
require('./config/passport')(passport) //sets custom configuration for passport
const routes = require('./routes') //route directory to clean up request 

//set up app
const app = express() //setting express invocation on "app" variable
const PORT = process.env.PORT || 8000 //allows application to run on environment port OR localhost 8000
// const { DEPLOYED_REACT_URL } = process.env

//middleware
app.use(express.urlencoded({ extended: false })) //form body parser
app.use(express.json()) //invoking automatic json parsing
// allow from only specific endpoints
// const corsOptions = { origin: ['http://localhost:3000', `${DEPLOYED_REACT_URL}`]}
app.use(cors())
app.use(passport.initialize()) //starts passport package for auth

//API routes
app.get('/api/', (req, res) => {
    res.json({ name: 'nippon runner', greeting: 'irashaimase!', author: 'Jessica Au and Leo Brooks', message: 'built in part by utilizing SEIR111 mern auth back end template'})
})

app.use('/api/users', routes.user)
app.use('/api/hira', routes.hira)
//server running
const server = app.listen(PORT, console.log(`🎧you are now tuned in to WSEI ${PORT} AM/FM radio🎧`))

module.exports = server