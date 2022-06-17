var express = require("express")
var app = express()
const PORT = 3000;

const cors = require('cors')
app.use(cors())

app.use(express.static('static'))
var path = require("path")

let wybrane
var formidable = require('formidable');

app.use(express.json());
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/index1.html"))
})

app.post("/clocks", function (req, res) {
    wybrane = req.body.dane
    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify(req.body.dane))
})

app.get("/two", function (req, res) {
    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify(wybrane))
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})