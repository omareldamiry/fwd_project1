const dotenv = require('dotenv')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const path = require('path')
const express = require('express')

const PORT = 8081

dotenv.config();
const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.json({ extended: true }))
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})
app.post('/add-url', async (req, res) => {
    try {
        const url = req.body.url;
        console.log(url);
    } catch (error) {
        console.log(error.message)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

module.exports = app;