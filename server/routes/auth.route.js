import { Router } from 'express';

import { login, logout } from '../controllers/auth.controller';

const router = Router();

router.post('/login', login);
router.delete('/singin', singin);

export default router;
