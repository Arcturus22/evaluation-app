const express = require("express");
const connectToMongo = require("./db");
const cors = require("cors");
const studentRoutes = require("./routes/student");

const port = process.env.PORT || 8000;

//Mongo Connection
connectToMongo();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Sir");
});

app.use("/student", studentRoutes);

//SERVER
app.listen(port, () => {
  console.log("Server Running on Port: " + port);
});
