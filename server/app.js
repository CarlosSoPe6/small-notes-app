const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/auth.route');
const notesRouter = require('./routes/notes.route');
const userRouter = require('./routes/user.route');
const authenticate = require('./middlewares/authenticate.middleware');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/notes', authenticate, notesRouter);
app.use('/api/user', authenticate, userRouter);

module.exports = app;
