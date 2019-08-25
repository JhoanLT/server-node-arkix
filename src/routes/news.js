const express       = require('express');
const News          = require('../controllers/news');
const router        = express.Router();
const {tokenVerify} = require('../middlewares/authenticated');

router.post('/register', tokenVerify, News.register);
router.get('/list-by-user', tokenVerify, News.listByUser);
router.delete('/delete/:id', tokenVerify, News.delete);

module.exports = router;