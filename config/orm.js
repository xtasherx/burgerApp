const connection = require('../config/connection.js');


// methods to execute queries 
const orm = {
    selectAll: function(table) {
      const queryString = "SELECT * FROM ?? ";
      connection.query(queryString, [table], function(err, result) {
        if (err) {
          throw err;
        } else {
          console.log(result);
        }
      });
    },
    insertOne: function(table,col1,col2,val1,val2) {
      const queryString = "INSERT INTO ??(??, ??) VALUES (?,?)";
      connection.query(queryString, [table,col1,col2,val1,val2], function(err, result) {
        if (err) {
          throw err;
        } else {
          console.log(result);;
        }
      });
    },
    updateOne: function(table,col1,val1,val2,) {
    const queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
    connection.query(queryString, [table,col1,val1,val2], function(err, result) {
      if (err) {
        throw err;
      } else {
        console.log(result);;
      }
    });
    }
    }


module.exports = orm;