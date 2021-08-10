const express = require('express');
const path = require('path');
const session = require('express-session'); //

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.use(session({
    secret: 'someBigSecret',
    resave: true,
    saveUninitialized: true
})); //

app.get('/', function(req, res, next) {
    let date = new Date();
    let hour = date.getHours();

    const cssFile = hour >= 6 && hour <= 18 ? 'day.css' : 'night.css';
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Express | Form</title>
            <link rel="stylesheet" href="/css/${cssFile}">
        </head>
        <body>
            <form action="/result" method="POST">
                <label for="name">Name</label>
                <input type="text" id="name" name="name">
                <label for="age">Age</label>
                <input type="number" name="age" id="age">
                <input type="submit" value="Submit Query">
            </form>
        </body>
        </html>`
    );
});

app.post('/result', function(req, res, next) {
    req.session.name = req.body.name;
    req.session.age = req.body.age;

    res.redirect(303, `/output`);
});

app.get('/output', function(req, res, next) {
    let name = req.session.name;
    let age = req.session.age;
    if (!name) {
        name = 'person';
    }
    if (!age) {
        age = 'age';
    }

    res.send(`Welcome '${name}'...You are '${age}' years old!`);
});

app.listen(3000);