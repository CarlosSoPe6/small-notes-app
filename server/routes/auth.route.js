const { Router } = require('express');

const { login, singup } = require('../controllers/auth.controller');

const router = Router();

router.post('/login', login);
router.post('/singup', singup);

module.exports = router;
