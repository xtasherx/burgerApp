const orm = require('../config/orm.js');

var burgers = {
selectAll: orm.selectAll("burgers"),

insertOne:orm.insertOne("burgers","burgerName","devoured","double cheeseburger",false),

updateOne: orm.updateOne("burgers","devoured", false, 2),
}

module.exports = burgers;