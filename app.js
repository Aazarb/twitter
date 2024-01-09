
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const index = require('./routes');

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('short'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(index);
app.listen(port);
