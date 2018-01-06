const MongoClient = require('mongodb').MongoClient

// Connection URL
const url = 'mongodb://localhost:38611'

// Database Name
const dbName = 'eaplatform'

// Database instance
let db;

// Use connect method to connect to the server
function connect(fn) {
    MongoClient.connect(url, (err, client) => {
        if (err) return console.error(err)
        console.log("Connected successfully to eaplatform db")
        db = client.db(dbName)
        fn(client)
    })
}

function getProjectsCollection() {
    return db.collection('applications')
}

module.exports = {
    connect,
    db,
    getProjectsCollection
}
