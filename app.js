const express = require('express');
const bodyParser = require('body-parser');

const tech = require('./routes/tech.route');
const home = require('./routes/index.route');

const mongoose = require('mongoose');
let mongoDB = 'mongodb://localhost:27017/resourcemgmt';

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/tech', tech);
app.use('/', home);

app.listen(3000, () => console.log('Listening on port 3000...'));