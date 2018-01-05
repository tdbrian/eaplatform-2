let express = require('express')
let app = express()

app.get('/', (req, res) => res.send('API'))

const port = 3000
app.listen(port, () => console.info(`Server running on localhost:${port}`))