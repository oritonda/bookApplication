// imports
const express = require("express");
const route = require("./routes/router");
const bodyParser = require("body-parser");
const cors = require("cors");
//  database connetion
const mongoose = require("./database/connection");
// environments
const enviroments = require('dotenv')
require('dotenv').config()
// port number
const port = 3000; 
// initializing app
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/',route)


app.listen(port, () => {
  console.log("Listening on port " + port);
});