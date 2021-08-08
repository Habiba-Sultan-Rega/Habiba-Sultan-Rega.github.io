const express = require('express');

const router = express.Router();

let products = [{
    id: 1,
    name: "orange juice",
    description: "sugar free orange juice",
    price: 8.00
}, {
    id: 2,
    name: "Apple juice",
    description: "sugar free apple jiuce",
    price: 8.00
}];

router.post('/addToCart', (req, res, next) => {
    res.redirect('/shoppingCart');
});

router.get('/shoppingCart', (req, res, next) => {

    res.render('shoppingCart', { products });

});
module.exports = router;