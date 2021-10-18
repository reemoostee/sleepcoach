const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3000;
var db=require("./app/models/db.js");

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// simple route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,'/index.html'))
});

app.get("/hygiene", (req, res) => {
  res.sendFile(path.join(__dirname,'/hygiene.html'))
});

app.get("/quality", (req, res) => {
  res.sendFile(path.join(__dirname,'/quality.html'))
});

app.post('/hygiene/insertdata', function(req, res, next) {
  var date = req.body.date;
  var time = req.body.time;
  var valence = req.body.valence;
  var arousal = req.body.arousal;
  var matrace = req.body.matrace;
  var noise = req.body.noise;
  var smell = req.body.smell;
  var ponder = req.body.ponder;
  var planing = req.body.planing;
  var thinking= req.body.thinking;
  var sql = `INSERT INTO hygiene(date, time, valence, arousal, matrace, noise, smell, ponder, planing, thinking) VALUES ("${date}","${time}","${valence}","${arousal}","${matrace}","${noise}","${smell}","${ponder}","${planing}","${thinking}")`;
  db.query(sql, function(err, result) {
    if (err) throw err;
    res.redirect('/hygiene');
  });
});

app.post('/quality/insertdata', function(req, res, next) {
  var date = req.body.date;
  var time = req.body.time;
  var daytimeDysfunction = req.body.daytimeDysfunction;
  var restorationAfterSleep = req.body.restorationAfterSleep;
  var difficultyInFallingAsleep = req.body.difficultyInFallingAsleep;
  var difficultyInGettingUp = req.body.difficultyInGettingUp;
  var satisfactionWithSleep = req.body.satisfactionWithSleep;
  var difficultyInMaintainingSleep = req.body.difficultyInMaintainingSleep;

  var sql = `INSERT INTO quality(date, time, daytimeDysfunction, restorationAfterSleep, difficultyInFallingAsleep, difficultyInGettingUp, satisfactionWithSleep, difficultyInMaintainingSleep) VALUES ("${date}","${time}","${daytimeDysfunction}","${restorationAfterSleep}","${difficultyInFallingAsleep}","${difficultyInGettingUp}","${satisfactionWithSleep}","${difficultyInMaintainingSleep}")`;
  db.query(sql, function(err, result) {
    if (err) throw err;
    res.redirect('/quality');
  });
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// set port, listen for requests
app.listen(PORT, () => {
  console.log("Server is running on port "+PORT+".");
});