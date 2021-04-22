// imports
const express = require("express");
const router = express.Router();

// path to add a book
router.delete("/book")
// path to view a book
router.get("/books")
// path to update a book 
router.put("/book/:id")
// path to delete a book 
router.delete("/book/:id")

// exporting all routes
module.exports = router;