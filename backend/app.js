const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config(); // Load environment variables

const db = require("./config/db");
db();

const authRoutes = require("./routes/authRoute");
const bookRoutes = require("./routes/bookRoutes");

app.use(express.json());
app.use(cors());


// Use authentication routes
app.use("/api/auth", authRoutes); // Register and login routes
app.use("/api/books", bookRoutes); // Protected routes for books

// Centralized Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome</title>
      <style>
        body {
          background-color: #f2f2f2;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        h1 {
          font-size: 4rem;
          color: #333;
        }
        p {
          font-size: 1.5rem;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div>
        <h1>Hello from the server!</h1>
        <p>Welcome to our application.</p>
      </div>
    </body>
    </html>
  `);
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
