const mongoose = require('mongoose');

const USER = process.env.MONGO_USER;
const PASSWORD = process.env.MONGO_PASSWORD;
const DB_NAME = process.env.MONGO_DB_NAME;
const CLUSTER = process.env.MONGO_CLUSTER;
const uri = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}.mmf2w.mongodb.net/${DB_NAME}?retryWrites=true`;
mongoose.connect(
  uri, 
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
).then(() => {
  console.log("Connected to database");
}).catch((err) => {
  console.log("Not connected to database", err);
});

module.exports = mongoose;
