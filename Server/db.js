const mysql = require('mysql');\
//Sigleton design pattern for the connection pool.
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
