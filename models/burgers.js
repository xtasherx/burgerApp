const { updateOne } = require('../config/orm.js');
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

    updateOne: function (val,val2,cb){
        orm.updateOne("burgers","devoured", val, val2, function(res){
            cb(res);
            
        })
    },
}



module.exports = burgers;
