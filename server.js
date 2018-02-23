// Requires
const fs = require('fs');
const readMultipleFiles = require('read-multiple-files');
const express = require('express');
const app = express();
app.use(express.static('public'));

// Models
const MODELS = "./models/"
const MergedPlanningMonth = require(MODELS + "MergedPlanningMonth");

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/planning.html")
})

app.get('/api/v1/planning', function (req, res) {
  const planning = new MergedPlanningMonth()
  res.send(JSON.stringify(planning))
})

app.listen(8080, function () {
  console.log('Launching http://localhost:8080')
})