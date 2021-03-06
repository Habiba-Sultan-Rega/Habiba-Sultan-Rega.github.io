const express = require('express');
const path = require('path');

const product = require('./product');

const app = express();
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use('/css', express.static(path.join(__dirname, 'css')));

app.use(product);


app.listen(3000);