let router = require('express').Router()
let mongo = require('mongodb')
let appDb = require('../database/mongodb')

router
    .get('/', (req, res) => {
        appDb.getProjectsCollection().find({ deleted: false })
            .toArray((err, docs) => res.send(docs))
    })
    .get('/:id', (req, res) => {
        appDb.getProjectsCollection()
            .findOne({_id: mongo.ObjectID(req.params.id)}, (err, doc) => res.send(doc))
    })
    .post('/', (req, res) => {
        let { name, description } = req.body
        let newApp = {
            deleted: false,
            name,
            description,
            type: 'REST'
        }
        appDb.getProjectsCollection()
            .insert(newApp, (response) => res.send(response))
    })
    .put('/', async (req, res) => {
        let { _id, name, description } = req.body
        try {
            let op = await appDb.getProjectsCollection().updateOne({ _id: mongo.ObjectID(_id) }, { $set: { name, description } })
            res.send(op)
        } catch (error) {
            console.error(error)
            res.send('Unable to update service.')
        }
    })
    .delete('/:id', (req, res) => {
        appDb.getProjectsCollection()
            .updateOne({ _id: mongo.ObjectID(req.params.id) }, { $set: { deleted: true } }, (err, op) => res.send(op))
    })

module.exports = router