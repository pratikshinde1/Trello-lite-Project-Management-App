// server/index.js
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const dotenv =require("dotenv");
const userRoute = require("./Routes/userRoute");
const taskRoute = require("./Routes/taskRoute");

const app = express();
 
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/tasks", taskRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Task Manager's API");
});

// Connect to MongoDB using Mongoose
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI,{
         });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
