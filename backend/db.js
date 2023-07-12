const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://doge:doge@doge-dine.6i7kopt.mongodb.net/Food?retryWrites=true&w=majority";

const mongoDb = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to database");

    const fetchedData = await mongoose.connection.db.collection("food-items");
    const data = await fetchedData.find({}).toArray();

    // console.log(data);
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

module.exports = mongoDb;
