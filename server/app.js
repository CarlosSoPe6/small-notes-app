const express = require('express');
const cors = require('cors');
const path = require('path');

const authRouter = require('./routes/auth.route');
const notesRouter = require('./routes/notes.route');
const userRouter = require('./routes/user.route');
const authenticate = require('./middlewares/authenticate.middleware');

const STATIC_FILES_PATH = path.join(__dirname, 'public');
const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(STATIC_FILES_PATH));

app.use('/api/auth', authRouter);
app.use('/api/notes', authenticate, notesRouter);
app.use('/api/user', authenticate, userRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(STATIC_FILES_PATH, 'index.html'));
});

console.log(STATIC_FILES_PATH);

module.exports = app;
