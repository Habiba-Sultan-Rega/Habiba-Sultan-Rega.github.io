const express = require('express');
const path = require('path');

const product = require('./product');
const shoppingcart = require('./shoppingCart');

const app = express();
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use('/css', express.static(path.join(__dirname, 'css')));

app.use(product);
app.use(shoppingcart);
app.listen(3000);