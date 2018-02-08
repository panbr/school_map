var config = require('../config/config.js')

// 首页
exports.index = function(req, res){
    res.sendFile(config.APP_PATH + '/index.html');
};

// 学校分布地图
exports.map = function(req, res){
    res.sendFile(config.APP_PATH + '/map.html');
};