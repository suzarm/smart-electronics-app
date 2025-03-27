var express = require('express');
var router = express.Router();
var ProductModel = require("../models/product");

/* GET users listing. */
router.get('/', function(req, res, next) {
  ProductModel.find(filter).sort({}).exec(function(err,result){
    if(err){
      return next(err)
    }
    res.send(result)
    })
});

module.exports = router;
