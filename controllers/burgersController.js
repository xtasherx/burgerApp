const express = require('express');
const router = express.Router();
const burgers = require('../models/burgers.js');



router.get("/", function (req, res) {
  burgers.selectAll(function (data) {
      var hbsObject = {
          burgers: data
        };
      console.log(hbsObject);
      res.render("index", hbsObject);
  });
});

  module.exports = router;