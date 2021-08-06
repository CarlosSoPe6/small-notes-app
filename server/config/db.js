import mongoose from 'mongoose';

const USER = process.env.MONGO_USER;
const PASSWORD = process.env.MONGO_PASSWORD;
const DB_NAME = process.env.MONGO_DB_NAME;
const CLUSTER = process.env.MONGO_CLUSTER;
const uri = `mongodb+srv://${user}:${password}@${CLUSTER}.mmf2w.mongodb.net/${CLUSTER}?retryWrites=true&w=majorityv`;
mongoose.connect(
  uri, 
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
).then(() => {
  console.log("Connected to database");
}).catch((err) => {
  console.log("Not connected to database", err);
});

export default mongoose;
