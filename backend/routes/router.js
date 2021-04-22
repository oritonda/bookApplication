// imports
const express = require("express");
const controller = require("../controller/controller")
const router = express.Router();

// path to add a book
router.post("/books",controller.addBook)
// path to view a book
router.get("/books",controller.getBooks)
// path to get a book by id
router.get("/books/:id", controller.getBook)
// path to update a book 
router.put("/books/:id", controller.updateBook)
// path to delete a book 
router.delete("/books/:id", controller.deleteBook)

// exporting all routes
module.exports = router;