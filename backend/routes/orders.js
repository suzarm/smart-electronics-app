var express = require('express');
var router = express.Router();
var OrderModel = require("../models/order");


// Example route for orders
router.get('/', (req, res) => {
  res.send('Orders page');
});

module.exports = router; // Export the router correctly
