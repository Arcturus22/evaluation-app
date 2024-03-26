// Connect mongodb to our Node app in index.js
const mongoose = require("mongoose");
require("dotenv").config();

const connectToMongo = async () => {
  mongoose
    .connect(
      "mongodb+srv://" +
        process.env.MONGO_USERNAME +
        ":" +
        process.env.MONGO_PASSWORD +
        "@cluster0.fgbii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then((x) => {
      console.log("---- Successfully Connected to Mongo ----");
    })
    .catch((err) => {
      console.log("---- Error while connecting to mongo ----", err);
    });
};

module.exports = connectToMongo;
