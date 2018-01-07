let express = require('express')
let mongodb = require('./database/mongodb')
let bodyParser = require('body-parser')

// app setup
let app = express()
app.use(bodyParser.json())

mongodb.connect((dbClient) => {
    const v1Api = '/api/v1/'

    // routes
    app.get('/', (req, res) => res.send('API'))
    app.use(`${v1Api}services`, require('./routes/services'))

    // start server
    const port = 40012
    app.listen(port, () => console.info(`Server running on localhost:${port}`))

    process.on('exit', () => {
        console.info('closing database client on app exit')
        dbClient.close()
    })
})