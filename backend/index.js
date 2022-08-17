const express = require('express')
const app = express()

app.get('/fetch-message', function (req, res) {
    res.status(200).json({message: 'World'})
})

app.listen(8000)