// imports
const { json } = require("body-parser");
const dbBook = require("../database/schema");

//funtion to add a book
exports.addBook = (req, res) => {
  const { tittle, author, description, image } = req.body;
  // creatiing a book object
  book = {
    tittle: tittle,
    author: author,
    description: description,
    image: image,
  };
  // add a book into the database
  dbBook.create(book).then((book)=>{
      res.send(book);
  }).catch((err)=>{
      res.send(err);
  });
};
// funtion to get all books
exports.getBooks = (req, res) => {
    // getting book from the database
    dbBook.find({}).then((book)=>{
        res.send(book);
    }).catch((err)=>{
        res.send(err);
    });
};
