//imprts
require('dotenv').config()
const db = require('../models')

//controllers
const test2 = (req, res) => {
    res.json({ message: 'hira endpoint gucci' })

}
//show entire db
const hiraShow = async (req, res) => {
    try {
        console.log('************ in hira controller route')
        const allHira = await db.Hira.find()
        console.log(allHira)
    } catch (e) {
        console.log('error: ', e)
    }
}

//locating single hira based on id
const hiraId = async (req, res) => {
    try {
        console.log('******* in hiraId controller route')
        await db.Hira.find({ bango: req.params.id }, (err, foundHira) => {
            if (err) console.log(err)
            res.json(foundHira)
        })
    } catch (e) {
        console.log('error', e)
    }
}

// creation, update, delete controllers

//create via form (postman)
const newHira = async (req, res) => {
    try {
        console.log('********* in newHira controller route')
        await db.Hira.create(req.body, (err, createdHira) => {
            if (err) console.log(err)
            res.json(createdHira)
        })
    } catch (e) {
        console.log('error', e)
    }
}
//update by form (postman)
const updateHira = async (req, res) => {
    try {
        console.log('******** in updateHira controller route')
        await db.Hira.updateOne({ bango: req.body.bango }, req.body, (err, updateHira) => {
            if (err) console.log(err)
            res.json(updateHira)
        })
    } catch (e) {
        console.log('error', e)
    }
}

//delete via form (postman)
const deleteHira = async (req, res) => {
    try{
        await db.Hira.deleteOne({ bango: req.body.bango}, (err, deleteHira) => {
            if (err) console.log(err)
        })
    } catch(e) {
        console.log('error', e)
    }
}

module.exports = { test2, hiraShow, hiraId , newHira, updateHira, deleteHira }

