const express = require('express');
const bodyParser = require('body-parser');

const tech = require('./routes/tech.route');

const app = express();

app.use('/tech',tech);

app.listen(3000, () => console.log('Listening on port 3000...'));