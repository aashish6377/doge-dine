const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://doge:doge@doge-dine.6i7kopt.mongodb.net/?retryWrites=true&w=majority";

const mongoDb = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

module.exports = mongoDb;
