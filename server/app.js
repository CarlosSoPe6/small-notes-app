import express from 'express';
import cors from 'cors';

import authRouter from './routes/auth.route';
import notesRouter from './routes/notes.route';
import userRouter from './routes/user.route';

const app = express();
app.use(cors());

app.route('/api/auth', authRouter);
app.route('/api/notes', notesRouter);
app.route('/api/user', userRouter);

export default app;
