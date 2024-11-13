const router = require("express").Router();
const Book = require("../models/bookModel");
//POST create
router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newBook = new Book(data);
    const book = await newBook.save();
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

//GET Read
router.get("/getbooks", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).send(books);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Specific Book
router.get("/getbook/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).send(book );
  } catch (error) {
    res.status(400).send(error);
  }
});

//Update 
router.put("/update/:id", async (req, res) => {
  try {
    const data = req.body;
    const book = await Book.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Delete
router.delete("/delete/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.status(200).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
