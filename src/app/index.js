const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send("" + ch(4))
})

app.listen(3000)

const ch = function(x) {
    return Math.cosh(x)
}

module.exports = ch