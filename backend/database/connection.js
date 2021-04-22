//imports
const mongoose = require("mongoose");
//Connecting to the database
mongoose.connect("mongodb://localhost/TodoDB", {
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
