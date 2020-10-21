const express = require('express');
const router = express.Router();
const burgers = require('../models/burgers.js');



  router.get("/", function (req, res) {
    burgers.selectAll(function (data) {
        var burgerObject = {
            burgers: data
          };
        console.log(burgerObject);
        res.render("index",burgerObject);
    });
  });

  router.post("/burgers", function (req, res) {
    console.log(req.body.burgerName);
    burgers.insertOne(req.body.burgerName,function () {
      res.redirect("/");
    })
  });


  router.put("burgers/:id", function (req, res) {
    
    burgers.updateOne(true,req.params.id,function () {
      res.redirect("/");
    })
  });

  module.exports = router;