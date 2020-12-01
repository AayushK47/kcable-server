const router = require('express').Router();
const controller = require('../controller/customers')

router.get('/customers/', controller.fetchAllCustomers);
router.post('/customers/', controller.createCustomer);
router.put('/customers/:id', controller.updateCustomer);

module.exports = router;