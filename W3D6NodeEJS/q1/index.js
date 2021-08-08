const express = require('express'); 
const path = require('path');
const app = express();
app.use(express.urlencoded());
app.use('/css', express.static(path.join(__dirname, 'css')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.get('/', (req, res) => {
const date = new Date();
const hour = date.getHours();
const cssfile = hour >= 6 && hour <= 18 ? 'day.css' : 'night.css';
res.render( "index", {time: date.toTimeString(), cssFile:cssfile});

});

app.listen(3001);