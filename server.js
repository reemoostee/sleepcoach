const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const app = express();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Sleep Coach." });
});

// set port, listen for requests
app.listen(PORT, () => {
  console.log("Server is running on port"+PORT+".");
});