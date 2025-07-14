const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost', // 数据库主机
  user: 'root', // 数据库用户名
  password: 'password', // 数据库密码
  database: 'market_management', // 数据库名称
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();