const router = require('express').Router();
const controller = require('../controller/payments');

router.get('/payments', controller.getCustomers);
router.post('/payments', controller.createPayment);

module.exports = router;