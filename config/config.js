var path = require('path');

var BASE_PATH = path.join(__dirname, '../');

exports.DB_PATH = path.join(BASE_PATH, 'db'); // 数据库地址

exports.ROUTE_PATH = path.join(BASE_PATH, 'routes'); // 路由地址

exports.APP_PATH = path.join(BASE_PATH, 'app'); // 应用地址
