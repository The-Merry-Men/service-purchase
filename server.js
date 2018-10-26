const express = require('express')
const port = 3001

const app = express()
app.listen(port, () => {
    console.log('server up and running')
})

app.use('/client', express.static('client'))
app.use(express.static('public'))