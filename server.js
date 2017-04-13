var express = require('express');


// Create our app
var app = express();

// folder to startß
app.use(express.static('public'));

// start the server
app.listen(3000, function(){
    console.log('Express server is up on port 3000');
});

