const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

// Define routes and attach corresponding controller functions
router.post("/add", authMiddleware, createBook);
router.get("/getbooks", getBooks);
router.get("/getbook/:id", getBookById);
router.put("/update/:id", authMiddleware, updateBook);
router.delete(
  "/delete/:id",
  authMiddleware,
  deleteBook
);

module.exports = router;
