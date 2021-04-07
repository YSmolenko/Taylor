const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send("" + chA(4))
})

app.listen(3000)

const chA = function(x) {
    return Math.cosh(x)
}

module.exports = chA