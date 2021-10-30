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

app.get("/feedback", (req, res) => {
  res.sendFile(path.join(__dirname,'/feedback.html'))
});

app.post('/hygiene/insertdata', function(req, res, next) {
  var date = req.body.date;
  var time = req.body.time;
  var valence = req.body.valence;
  var arousal = req.body.arousal;
  var matrace = req.body.matrace;
  var noise = req.body.noise;
  var smell = req.body.smell;
  var brightness = req.body.brightness;
  var room = req.body.room;
  var ponder = req.body.ponder;
  var planing = req.body.planing;
  var thinking= req.body.thinking;
  var sql = `INSERT INTO hygiene(accesstoken, date, time, valence, arousal, matrace, noise, smell, brightness, room, ponder, planing, thinking) VALUES ("${req.body.accessToken}", "${date}","${time}","${valence}","${arousal}","${matrace}","${noise}","${smell}","${brightness}","${room}","${ponder}","${planing}","${thinking}")`;
  db.query(sql, function(err, result) {
    if (err) throw err;
    res.redirect('/hygiene');
  });
});

app.post('/quality/insertdata', function(req, res, next) {
  var date = req.body.date;
  var time = req.body.time;
  var restorationAfterSleep = req.body.restorationAfterSleep;
  var difficultyInFallingAsleep = req.body.difficultyInFallingAsleep;
  var difficultyInGettingUp = req.body.difficultyInGettingUp;
  var satisfactionWithSleep = req.body.satisfactionWithSleep;
  var difficultyInMaintainingSleep = req.body.difficultyInMaintainingSleep;

  var sql = `INSERT INTO quality(accesstoken, date, time, restorationAfterSleep, difficultyInFallingAsleep, difficultyInGettingUp, satisfactionWithSleep, difficultyInMaintainingSleep) VALUES ("${req.body.accessToken}", "${date}","${time}","${restorationAfterSleep}","${difficultyInFallingAsleep}","${difficultyInGettingUp}","${satisfactionWithSleep}","${difficultyInMaintainingSleep}")`;
  db.query(sql, function(err, result) {
    if (err) throw err;
    res.redirect('/quality');
  });
});

app.post('/feedback/insertdata', function(req, res, next) {
  //add column accesstoken
 var sql = `INSERT INTO feedback(accesstoken, question_001a, question_001b, question_001c, question_001d, question_001e, question_002a, question_002b, question_002c, question_002d, question_002e, question_003a, question_003b, question_003c, question_003d, question_003e, question_004a, question_004b, question_004c, question_004d, question_004e) VALUES ("${req.body.accessToken}", "${req.body.question_001a}", "${req.body.question_001b}", "${req.body.question_001c}", "${req.body.question_001d}", "${req.body.question_001e}", "${req.body.question_002a}", "${req.body.question_002b}", "${req.body.question_002c}", "${req.body.question_002d}", "${req.body.question_002e}", "${req.body.question_003a}", "${req.body.question_003b}", "${req.body.question_003c}", "${req.body.question_003d}", "${req.body.question_003e}", "${req.body.question_004a}", "${req.body.question_004b}", "${req.body.question_004c}", "${req.body.question_004d}", "${req.body.question_004e}")`;
  db.query(sql, function(err, result) {
    if (err) throw err;
    res.redirect('/feedback');
  });
});

app.post('/checkAccessTokenValidity', function(req, res, next) {
  var data = {};
  data['accessToken'] = req.body.accessToken;
  var sql = "SELECT COUNT(*) AS countAT FROM accesstokens WHERE accesstoken = '"+ data['accessToken']+"'";
  db.query(sql, function(err,result) {
    if (err) throw err;
      data['accessTokenValid'] = (result[0].countAT>=1);
      res.end( JSON.stringify(data));  
  });
});

app.post('/checkExistingAnswersForAccessToken', function(req, res, next) {
  var data = {};
  data['accessToken'] = req.body.accessToken;
  var sql = "SELECT COUNT(*) AS countAT FROM hygiene WHERE accesstoken = '"+ data['accessToken']+"'";
  db.query(sql, function(err,result) {
    if (err) throw err;
      data['existingAnswers'] = (result[0].countAT>=1);
      res.end( JSON.stringify(data));  
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