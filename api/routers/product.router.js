var controller = require('../controllers/product.controller');
var express = require('express');
var router = express.Router();

router.get('/',controller.index);
router.post('/', controller.create);
module.exports =router;