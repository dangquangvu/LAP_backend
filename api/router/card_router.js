const express = require("express");
const app = express(),
  auth = require("../middlewares/auth"),
  CardfolderController = require("../controller/CardFolderController");

app.route("/createCardFolder").post(CardfolderController.createCardFolder);

module.exports = app;
