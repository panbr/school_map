var config = require('../config/config.js')

exports.index = function(req, res){
    res.sendFile(config.APP_PATH + '/index.html');
};