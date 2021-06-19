var express = require('express');
var router = express.Router();
var products = require('../service/product.service')


router.get('/list', function(req,res){

    const result = products.listProducts();

    res.send(result);
});

router.post('/create', function(req,res){

    const result = products.listProducts();

    res.send(result);
});


module.exports = router;