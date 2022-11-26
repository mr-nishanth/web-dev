const router = require('express').Router();

const Task = require("../model/models")


router.get('/', (req, res, next) => {
    Task.find((err, docs) => {
        if (err) console.log(err)
        res.json(docs)
    })
})

router.post('/', (req, res, next) => {
    const task = new Task(req.body)
    task.save((err, doc) => {
        if (err) console.log(err)
        res.json(doc)
    })
})

router.put('/:id', (req, res, next) => {
    Task.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true
    }, (err, doc) => {
        if (err) console.log(err)
        res.json(doc)
    })
})


router.delete('/:id', (req, res, next) => {
    Task.findByIdAndDelete(req.params.id
        , (err, doc) => {
            if (err) console.log(err)
            res.json(doc)
        })
})

module.exports = router;