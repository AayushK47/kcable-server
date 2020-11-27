const router = require('express').Router();
const controller = require('../controller/customers')

router.get('/api/customers/', controller.fetchAllCustomers);
router.post('/api/customers/', controller.createCustomer);

module.exports = router