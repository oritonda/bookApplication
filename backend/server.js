// imports
//Imports
const express = require("express");
const route = require("./routes/router");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("./database/connection");
// initializing app
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/',route)


app.listen(3000, () => {
  console.log("Listening on port 3000");
});
