const connection = require('../config/connection.js');


// methods to execute queries 
const orm = {
    selectAll: function(table,cb) {
      const queryString = "SELECT * FROM ?? ";
      connection.query(queryString, [table], function(err, result) {
        if (err) {
          throw err;
        } else {
          cb(result);
        }
      });
    },
    insertOne: function(table,col1,col2,val1,val2,cb) {
      const queryString = "INSERT INTO ??(??, ??) VALUES (?,?)";
      connection.query(queryString, [table,col1,col2,val1,val2], function(err, result) {
        if (err) {
          throw err;
        } else {
          cb(result);
        }
      });
    },
    updateOne: function(table,col1,val,val2,cb) {
    const queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
    connection.query(queryString, [table,col1,val,val2], function(err, result) {
      if (err) {
        throw err;
      } else {
        cb(result);;
      }
    });
    }
    }


module.exports = orm;