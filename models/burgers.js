const orm = require('../config/orm.js');

var burgers = {
    selectAll: function(cb){ 
        orm.selectAll("burgers", function(res){
        cb(res);
    })
    },

    insertOne: function(val,cb){
        orm.insertOne("burgers","burgerName","devoured",val, false, function(res){
        cb(res);
    })
    },

    updateOne: function (val1,val2,cb){
        orm.updateOne("burgers","devoured", val1, val2, function(res){
            cb(res);
            console.log(res);
        })
    },
}


module.exports = burgers;
