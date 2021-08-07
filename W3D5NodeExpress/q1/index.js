const express = require('express');
const app = express();

app.get('/', function(req, res, next) {
    let name = req.query.name;
    let age = req.query.age;

    if (!name) {
        name = "person";
    }
    if (!age) {
        age = "age";
    }
    res.send(`Welcome ${name}, are you ' ${age} ' years old?`);
});

app.listen(3001);