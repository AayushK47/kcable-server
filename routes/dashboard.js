const router = require('express').Router();
const routes = require('../controller/dashboard');

router.get('/dashboard', routes.getCustomersWithDuedate);

module.exports = router;