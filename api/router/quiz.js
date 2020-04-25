var express = require("express");
const GenerateQuizController = require("../controller/GenerateQuizController");
const auth = require("../middlewares/auth");
var app = express();

app.route("/generateQuiz/:id").post(GenerateQuizController.generateQuiz);

module.exports = app;