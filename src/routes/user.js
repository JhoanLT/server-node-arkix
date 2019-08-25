const express       = require('express');
const User          = require('../controllers/user');
const router        = express.Router();
const {tokenVerify} = require('../middlewares/authenticated');

router.get('/get', tokenVerify, User.get);
router.post('/auth', User.auth);
router.post('/register', User.register);

module.exports = router;