const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express(); // instance of express
app.use(express.json()); // it is used as body-parser  / used to read data from in json format
app.use(cors()); // varifies request from client
const dburl = "mongodb://localhost:27017/";

mongoose.connect(dburl + "Sample").then(() => {
  console.log("connected");
});

const usersSchema = new mongoose.Schema({
  ts: Date,
  machine_status: Number,
  vibration: Number,
});

const userModel = mongoose.model("user", usersSchema);

app.get("/users", async (req, res) => {
  // use async function because return promises
  try {
    let data = await userModel.find({}); // await - wait upto success if not then write error
    res.send(data);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
});

app.post("/users", async (req, res) => {
  try {
    const instance = new userModel(req.body);
    instance.save();
    res.send("Success");
  } catch (e) {
    console.log(e);
  }
});

app.listen(1819, () => {
  console.log("Server is running on port 1819");
});
