// imports
const express = require("express");
const controller = require("../controller/controller")
const router = express.Router();

// path to add a book
router.post("/book",controller.addBook)
// path to view a book
router.get("/books",controller.getBooks)
// path to update a book 
router.put("/book/:id")
// path to delete a book 
router.delete("/book/:id")

// exporting all routes
module.exports = router;