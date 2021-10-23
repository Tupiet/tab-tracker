const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined')) // Ens dona informació sobre els logs, qui ha entrat, quan ha fet la petició, etc.
app.use(express.json()) // Per treballar amb JSON (substitueix body.parser)
app.use(express.urlencoded({extended: true})); // Per treballar amb JSON (substitueix body.parser)
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: 'Hello World!'
    })
})

app.listen(process.env.PORT || 8081)