import express from 'express';
import cors from 'cors';

import authRouter from './routes/auth.route';
import notesRouter from './routes/notes.route';
import userRouter from './routes/user.route';
import { authenticate } from './middlewares/authenticate.middleware';

const app = express();
app.use(cors());

app.route('/api/auth', authRouter);
app.route('/api/notes', authenticate, notesRouter);
app.route('/api/user', authenticate, userRouter);

export default app;
