const express = require('express');
const router = express.Router();
router.get('/shoppingCart', (req, res, next) => {
    const products = req.session.cart;
    res.render('shoppingCart', { products });
});

router.post('/addToCart', (req, res, next) => {
    if (!req.session.cart[req.body.name]) {
        req.session.cart[req.body.name] = {
            name: req.body.name,
            quantity: 1,
            price: req.body.price,
            description :req.body.description
        };

    } else {
        req.session.cart[req.body.name].quantity += 1;
    }

    res.send(200, Object.keys(req.session.cart).length);
});
module.exports = router;