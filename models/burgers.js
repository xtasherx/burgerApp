const orm = require('../config/orm.js');

var burgers = {
selectAll: function(){ orm.selectAll("burgers", function(res){
    return res;
})},

insertOne: function(){orm.insertOne("burgers","burgerName","devoured","double cheeseburger",false)},

updateOne: function (){ orm.updateOne("burgers","devoured", false, 2)},
}

module.exports = burgers;
