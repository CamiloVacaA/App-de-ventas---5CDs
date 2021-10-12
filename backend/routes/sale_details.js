const router = require('express').Router()

const controller = require('../controllers/sale_details.controller')

router.get('/', controller.getAll)
router.post('/', controller.saveProduct)
router.get('/search', controller.search)

module.exports = router