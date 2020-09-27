var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var DisciplinaRoute = require('./routes/DisciplinaRoutes');

var app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); 

app.use('/disciplinas', DisciplinaRoute);

module.exports = app;