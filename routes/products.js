const express = require('express')
const router = express.Router();

const productsController = require('../controllers/products')

router.get('/new', productsController.new)

router.post('/', productsController.create)

router.get('/', productsController.index)

module.exports = router
