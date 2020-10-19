const connection = require('../config/connection.js');


// methods to execute queries 
var orm = {
    selectAll: function(table) {
      var queryString = "SELECT * FROM ?? ";
      connection.query(queryString, [table], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(table,col1,col2,val1,val2) {
      var queryString = "INSERT INTO ??(??, ??) VALUES (?,?)";
      connection.query(queryString, [table,col1,col2,val1,val2], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(table,col1,val1,val2,) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
    connection.query(queryString, [table,col1,val1,val2], function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    }
    }


module.exports = orm;