var express = require('express');
var router = express.Router();

var User = require('../service/user.service');

//register
router.get('/user', function(req,res){

    const result = user.getUser();

    res.send(result);
});


module.exports = router;