const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    let product = {
        id: 1,
        name: "Apple Juice",
        description: "Sugar free Juice",
        price: 8.00
    };

    res.render('product', { product });
});
module.exports = router;