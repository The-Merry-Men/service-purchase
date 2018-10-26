const express = require('express')
const port = 3001

const app = express()
app.listen(port, () => {
    console.log('server up and running')
})

//what is this for??????????????
app.use('/client', express.static('client'))

app.use(express.static('public'))