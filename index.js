var path = require('path');
var express = require('express');
var app = express();
var port = 3000

var files = [
    'help',
    'animal',
    'anime',
    'boy',
    'couple',
    'eboy',
    'egirl',
    'girl',
    'landscape'
]

app.use(express.static(path.join(__dirname, 'api')));
app.get('/', function (req, res) {

    res.json({
        statusCode: res.statusCode,
        urls: files
    })

});

app.listen(port);

console.log(`Example app listening at http://localhost:${port}`);