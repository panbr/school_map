/**
 * 页面 URL
 */

var config = require('../config')

// 首页
exports.index = function(req, res){
    res.sendFile(config.APP_PATH + '/index.html');
};

// 学校分布地图
exports.map = function(req, res){
    res.sendFile(config.APP_PATH + '/map.html');
};