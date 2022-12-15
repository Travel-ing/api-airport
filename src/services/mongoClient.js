const mongoose = require("mongoose");

// Set up default mongoose connection
const mongoDB = process.env.MONGO_URL;
mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => console.log("Connect to MongoDB"))
  .catch((err) => {
    console.log("Error to connect MongoDB");
  });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;
