const express = require('express');
const app = express();
const morgan = require('morgan');

// settings
app.set('port', 3000);

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})) // Get and support data from simple forms
app.use(express.json()) // Get and suppot JSON data

// routes
app.get('/', (req,res) => {
    res.json({ "Title": "Hello World" });
})

// starting the server 
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
})