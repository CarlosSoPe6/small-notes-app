const express = require('express');
const cors = require('cors');
const path = require('path');

const authRouter = require('./routes/auth.route');
const notesRouter = require('./routes/notes.route');
const userRouter = require('./routes/user.route');
const authenticate = require('./middlewares/authenticate.middleware');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', authRouter);
app.use('/api/notes', authenticate, notesRouter);
app.use('/api/user', authenticate, userRouter);

module.exports = app;
