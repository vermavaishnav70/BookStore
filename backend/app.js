const express = require("express");
const app = express();
require("dotenv").config(); // Load environment variables

const db = require("./config/db");
db();

const authRoutes = require("./routes/authRoute");
const bookRoutes = require("./routes/bookRoutes");

app.use(express.json());

// Use authentication routes
app.use("/api/auth", authRoutes); // Register and login routes
app.use("/api/books", bookRoutes); // Protected routes for books

// Centralized Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
