const router = require('express').Router();
const controller = require('../controller/auth');

router.post('/signup', controller.signup);
router.post('/login', controller.login);

module.exports = router;