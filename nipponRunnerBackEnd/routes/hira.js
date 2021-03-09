const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/test2', ctrl.hira.test2)

router.get('/allHira', ctrl.hira.hiraShow)

router.get('/:id', ctrl.hira.hiraId)

router.post('/new', ctrl.hira.newHira)

router.put('/update', ctrl.hira.updateHira)

router.delete('/delete', ctrl.hira.deleteHira)

module.exports = router


// req.body -> request being sent to db, huge object. input in a form and submitted with request  
// .params -> anything placed into address bar
// .query -> search through data based on what passes through the query