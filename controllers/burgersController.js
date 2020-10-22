const express = require('express');
const router = express.Router();
const burgers = require('../models/burgers.js');



  router.get("/", function (req, res) {
    burgers.selectAll(function (data) {
        var burgerObject = {
            burgers: data
          };
  
        res.render("index",burgerObject);
    });
  });

  router.post("/burgers", function (req, res) {
    burgers.insertOne(req.body.burgerName,function () {
      res.redirect("/");
    })
  });


  router.put("/api/burgers/:id", function (req, res) {
    console.log(req.params.id);
    burgers.updateOne(true,req.params.id,function () {
      res.json({status:'success'});
    })
  });

  module.exports = router;