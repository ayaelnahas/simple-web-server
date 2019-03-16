var express = require('express')
var app = express()
var path = require('path')


app.get('/', function (req, res) {

    res.send('Home Page')
})

app.get('/profile', function (req, res) {
    res.send('Profile Page')
})

app.get('/file', function (req, res) {
    {
        var id = req.query.id
        res.sendFile(path.join(__dirname, `./assets/${id}.png`))
    }

})

app.listen(3000)