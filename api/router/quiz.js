var express = require("express");
const { GenerateQuizController, TestController } = require("../controller");
const auth = require("../middlewares/auth");
var app = express();

app.route("/generateQuiz/:id").post(GenerateQuizController.generateQuiz);

app.route("/test/:id").post(TestController.testQuiz);

module.exports = app;