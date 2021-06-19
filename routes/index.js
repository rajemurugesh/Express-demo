var express = require('express');
var router = express.router();

//Get Homepage
router.get('/', function(req, res){
    res.send('welcome');
});

module.exports = router;