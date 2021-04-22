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
  dbBook
    .create(book)
    .then((book) => {
      res.send(book);
    })
    .catch((err) => {
      res.send(err);
    });
};
// funtion to get all books
exports.getBooks = (req, res) => {
  // getting book from the database
  dbBook
    .find({})
    .then((book) => {
      res.send(book);
    })
    .catch((err) => {
      res.send(err);
    });
};
// function to delete a book using a book id
exports.deleteBook = (req, res) => {
    const {id} = req.params
    dbBook.findByIdAndDelete({_id:id}).then((book) => {
        json.send(book);
      })
      .catch((err) => {
        res.send(err);
      });
};
// funtion to update a book using a book id
exports.updateBook = (req, res) => {
    const {id} = req.params
    const { tittle, author, description, image } = req.body;
    book = {
        tittle: tittle,
        author: author,
        description: description,
        image: image,
      };
    dbBook.findByIdAndUpdate({_id:id},book).then((book) => {
        json.send(book);
      })
      .catch((err) => {
        res.send(err);
      });
};
// find a book by id
exports.getBook = (req,res)=>{
  const {id} = req.params
  dbBook.findById(id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
}