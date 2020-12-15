const router = require('express').Router();
const controller = require('../controller/customers')

router.get('/customers/', controller.fetchAllCustomers);
router.post('/customers/', controller.createCustomer);
router.put('/customers/:id', controller.updateCustomer);
router.get('/customers/:id', controller.customerDetails);
router.delete('/customers/:customerId/:connectionId', controller.deleteCustomerConnection);

module.exports = router;