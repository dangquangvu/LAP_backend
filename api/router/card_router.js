const express = require("express");
const app = express(),
    auth = require("../middlewares/auth"),
    CardfolderController = require("../controller/CardFolderController"),
    CardPoolController = require('../controller/CardPoolController')

app
    .route("/createCardFolder")
    .post(CardfolderController.createCardFolder)

app
    .route("/getAllCardFolder")
    .post(CardfolderController.findAllCardFolder);
app
    .route("/getInforCardFolder/:id")
    .post(CardfolderController.findCardFolderById);
app
    .route("/getAllCardFolder/:id")
    .post(CardPoolController.findAllCardPool);

module.exports = app;