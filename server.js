var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var app = express()
mongoose.connect('mongodb://localhost/felicimetro')
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var routes = require('./routes/ScoreRoutes.js')
app.use('/', routes);

app.use(express.static('public'));

app.listen(3000);
