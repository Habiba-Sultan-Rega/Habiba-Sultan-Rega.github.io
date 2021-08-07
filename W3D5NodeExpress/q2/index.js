const express = require('express');
const app = express();
app.use(express.urlencoded());
app.get('/', (req, res) => {
    res.send('<form action="/result" method="POST"> '+
        '<label for="name">Name</label> '+
        '<input type="text" id="name" name="name" placeholder="Enter your name"> ' +
        '<label for="age">Age</label> ' +
        '<input type="number" name="age" id="age" placeholder="enter your age"> ' +
        '<input type="submit" value="Submit Query"> ' +
        '</form>');
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

    res.send(`Welcome ${name}, are you ' ${age} ' years old?`);
});

app.listen(3000);