var express = require("express");
// var router = express.Router();
const AuthController = require("../controller/AuthController");
const auth = require("../middlewares/auth");
var app = express();
/* GET users listing. */
app.route("/init").get(AuthController.init);
app.route("/signIn").post(AuthController.signIn);
app
    .route("/")
    .get(auth.authenticateToken, AuthController.getLogin)
    .post(AuthController.postLogin);
app.route("/verifyToken").post(AuthController.verifyToken);

module.exports = app;