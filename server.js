let express = require('express');
let app = express();
const bodyParser = require("body-parser");
const path = require("path");
const csurf = require('csurf');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenvAbsolutePath = path.join(process.cwd(), '.env');
require('dotenv').config({ silent: true, path: dotenvAbsolutePath });
let port = process.env.PORT || 3334;


const csrfMiddleware = csurf({
    cookie: true
});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/', require('./api/router'));



app.listen(port);
console.log('RESTful API server started on: ' + port);