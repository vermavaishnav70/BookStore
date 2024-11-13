const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const db = require("./db/db");
db();

const bookRoutes = require('./routes/bookRoutes')
app.use(express.json());
app.use('/api/books',bookRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
