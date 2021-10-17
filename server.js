const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
var db=require("./app/models/db.js");

const app = express();

// simple route
app.get("/", (req, res) => {
  //res.json({ message: "Welcome to the Sleep Coach." });
  res.sendFile(path.join(__dirname,'/index.html'))
});

app.get("/hygiene", (req, res) => {
  res.sendFile(path.join(__dirname,'/hygiene.html'))
});

app.get("/quality", (req, res) => {
  res.sendFile(path.join(__dirname,'/quality.html'))
});

app.post('/hygiene/contact-us', function(req, res, next) {
  var f_name = "tester";//req.body.f_name;
  var l_name = "hans";//req.body.l_name;
  var email = "abc@blub.ch";//req.body.email;
  var message = "ich bin die nachricht";// req.body.message;
 
  var sql = `INSERT INTO contacts (f_name, l_name, email, message, created_at) VALUES ("${f_name}", "${l_name}", "${email}", "${message}", NOW())`;
  db.query(sql, function(err, result) {
    if (err) throw err;
    console.log('record inserted');
    //req.flash('success', 'Data added successfully!');
    res.redirect('/hygiene');
  });
});

// set port, listen for requests
app.listen(PORT, () => {
  console.log("Server is running on port "+PORT+".");
});