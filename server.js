/**
 * 后台主程序
 * @author panbr
 * @time 2018-02-07 00:40:23
 */

var express = require('express');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./routes');
var api = require('./routes/api');

var app = module.exports = express();


//SQLite
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(__dirname+'/db/school.db');


/// Configuration
const PORT = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'app')));
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(function(req, res, next) {
    req.db = db;
    next();
})

/// ROUTE
app.get('/', routes.index)
app.get('/map', routes.map)

/// API
app.get('/api/schoolList', api.schoolList)
app.post('/api/application', urlencodedParser, api.application)

/// Start Server
app.listen(PORT, function(req, res) {
    console.log("app is running at http://localhost:", PORT);
})