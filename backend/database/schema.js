//imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and model

const bookSchema = new Schema({
  tittle: {
    type: String,
  },
  author: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  
});

const book = mongoose.model("book", bookSchema);

module.exports = book;