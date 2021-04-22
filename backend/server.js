// imports
//Imports
const express = require("express");
// const route = require("./routes/");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("./database/connection");

const app = express();
app.use(cors());

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/route", route);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
