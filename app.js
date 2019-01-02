const express = require('express'); // Requiring express
const app = express(); // Creating an instance of express

const logger = require('morgan'); // Requiring morgan
app.use(logger('dev')); // Log every request during development

app.get('/api/test', (req, res) => {
    res.json({text: "Hello World"});
});

app.get('/api/bruger', (req, res) => {
    res.json({
        uname: "Root",
        pword: "Toor"
    });
});

app.use(express.static('public')); // If request aint a route, respond with webpage

app.listen(3000, (err) => { // Start listening on port 3000
    if(err) { // If error 
        console.log(err); // Console log it
    }
    console.log("Listening on port: 3000"); // Console log success
});