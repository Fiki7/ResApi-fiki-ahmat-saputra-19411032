/*
Pemograman 4
*/

const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const bodyParser = require('body-parser')
const db = require ('./Config/database')
app.use(cors())
app.use(bodyParser.json({
    extended: true,
    limit: '50mb'
}))
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}))
db.connectToDb
app.use('./users', require('./Router/user_router'))
app.get("/", (req, res) => {
 res.json({ message: " SELAMAT DATANG DI PEMOGRAMAN 4" });
});
app.listen(port, function(){
console.log('Berjalan di Port:' + port)
})
