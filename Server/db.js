const mysql = require('mysql');
// var connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'db_cutecut'
// });
// connection.connect(function(err) {
//     if (err) throw err;
// });
var pool;
module.exports = {
    getPool: function () {
      if (pool) return pool;
      pool = mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'db_cutecut'
      });
      return pool;
    }
};
