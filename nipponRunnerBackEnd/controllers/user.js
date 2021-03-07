//imports 
require('dotenv').config()
const passport = require('passport')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env
const db = require('../models')
const { response } = require('express')

//ctrlrs
const test = (req,res) => {
    res.json({ message: 'user endpoint ok!!'})
}

const register = (req,res) => {
    console.log(`>>>> inside user ctrlr register`)
    db.User.findOne({ email: req.body.email })
    .then(user => {
        if(user){
            return res.status(400).json({ message: 'email already exists'})
        } else {
            const newUser = new db.User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            })
            bcrypt.genSalt(10, (err, salt)=>{
                if(err) throw Error

                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) console.log(`>>>>error in hash ${err}`)
                    newUser.password = hash
                    newUser.save()
                    .then(createdUser => res.json(createdUser))
                    .catch(err => console.log(`>>>> user creation error ${err}`))
                })
            })
        }
    })
    .catch(err => {
        console.log(`error finding user: ${user}`)
    })
}

const login = async (req, res) => {
    console.log(`>>>> inside user ctrlr login`)
    const foundUser = await db.User.findOne({ email: req.body.email })

    if(foundUser){
        let isMatch = await bcrypt.compare(req.body.password, foundUser.password)
        console.log(isMatch)
        if(isMatch){
            const payload = {
                id: foundUser.id,
                email: foundUser.email,
                username: foundUser.username
            }
            jwt.sign(payload, JWT_SECRET, { expiresIn: 3420 }, (err, token) => { 
                if(err){
                    res.status(400).json({ message: 'Please take a 17 minute break! Log in again to continue' })
                }
                const auth = jwt.verify(token, JWT_SECRET, { expiresIn: 60 })
                console.log(`>>>> login route token auth`)
                console.log(auth)
                res.json({ success: true, token: `Bearer ${token}`, userData: auth})
            })
        } else {
            return res.status(400).json({ message: 'email or password incorrect' })
        }
    } else {
        return res.status(400).json({ message: 'user not found' })
    }
}

const profile = (req,res) => {
    console.log(`>>>> inside user ctrlr profile`)
    const { id, username, email } = req
    res.json({ id, username, email })
}

module.exports = { test, register, login, profile }