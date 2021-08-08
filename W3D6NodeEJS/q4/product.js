const express = require('express');

const router = express.Router();
let product = {
    id: 1,
    name: "Apple Juice",
    description: "sugar free orange juice",
    price: 8.00
};

router.get('/', (req, res, next) => {
    res.render('product', { product });
});

module.exports = router;