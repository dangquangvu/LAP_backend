const express = require("express");
var app = express();

app.use("/card", require("./card_router"));
app.use("/auth", require("./auth"));
app.use("/quiz", require("./quiz"));
module.exports = app;