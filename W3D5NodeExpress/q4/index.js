const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded());
app.use('/css', express.static(path.join(__dirname, 'css')));
app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    const style = hour >= 6 && hour <= 18 ? 'day.css' : 'night.css';
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Express | Form</title>
            <link rel="stylesheet" href="/css/${style}">
        </head>
        <body>
            <form action="/result" method="POST">
            <label for="name">Name</label> 
            <input type="text" id="name" name="name" placeholder="Enter your name">  
            <label for="age">Age</label>  
            <input type="number" name="age" id="age" placeholder="enter your age">  
            <input type="submit" value="Submit Query">  
            </form>
        </body>
        </html>`
    );
});

app.post('/result', function(req, res, next) {
    let name = req.body.name;
    let age = req.body.age;
    if (!name) {
        name = 'person';
    }
    if (!age) {
        age = 'age';
    }
    res.redirect(303, `/output?name=${name}&age=${age}`);
});

app.get('/output', function(req, res, next) {
    let name = req.query.name;
    let age = req.query.age;
    res.send(`Welcome ${name}, are you ' ${age} ' years old?`);
});

app.listen(3000);