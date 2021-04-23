//imports
const mongoose = require("mongoose");
// environments
const enviroments = require('dotenv')
require('dotenv').config()
// calling the connection string
const database = process.env.DBCONNECTION
//Connecting to the database
mongoose.connect(database, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection
  .once("open", () => {
    console.log("Connected to database");
  })
  .on("error", (error) => {
    console.log("Error: ", error);
  });
