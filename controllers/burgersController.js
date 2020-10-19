const express = require('express');
const burger = require('../models/burgers.js');
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var app = express();
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// i don't know if you need this really? find out later 
app.use(express.json());
// Sets up handlebars 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");