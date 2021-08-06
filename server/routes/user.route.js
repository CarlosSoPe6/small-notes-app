const { Router } = require('express');

const { getSessionUser } = require( '../controllers/user.controller');

const router = Router();

router.get('/', getSessionUser);

module.exports = router;
