let router = require('express').Router()
let mongo = require('mongodb')
let appDb = require('../database/mongodb')

router
    .get('/', (req, res) => {
        appDb.getProjectsCollection().find({})
            .toArray((err, docs) => res.send(docs))
    })
    .get('/:id', (req, res) => {
        appDb.getProjectsCollection()
            .findOne({_id: mongo.ObjectID(req.params.id)}, (err, doc) => res.send(doc))
    })
    .post('/', (req, res) => {
        let app = req.body
        appDb.getProjectsCollection()
            .insert(app, (response) => res.send(response))
    })
    .put('/', (req, res) => {
        let app = req.body
        appDb.getProjectsCollection()
            .updateOne({ _id: mongo.ObjectID(app._id) }, app, (err, op) => res.send(op))
    })
    .delete('/:id', (req, res) => {
        appDb.getProjectsCollection()
            .updateOne({ _id: mongo.ObjectID(app._id) }, app, (err, op) => res.send(op))
    })

module.exports = router