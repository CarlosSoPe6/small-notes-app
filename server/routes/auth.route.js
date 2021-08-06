const { Router } = require('express');

const { login, singin } = require('../controllers/auth.controller');

const router = Router();

router.post('/login', login);
router.delete('/singin', singin);

module.exports = router;
