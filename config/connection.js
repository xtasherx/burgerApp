const mysql = require("mysql");


if (process.env.JAWSDB_URL){
  console.log('Detected envvar JAWSDB_URL, using that...');
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.MYSQL_PORT || 3306,
    password: process.env.MYSQL_PASS,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DB
  });
};





connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;