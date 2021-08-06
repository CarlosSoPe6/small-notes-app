import { Router } from 'express';

import { getSessionUser } from '../controllers/user.controller';

const router = Router();

router.get('/', getSessionUser);

export default router;
