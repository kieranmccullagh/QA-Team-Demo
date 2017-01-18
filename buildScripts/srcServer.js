var express = require('express'); //Call Express
var path = require('path'); // Reference to Path
var open = require('open'); //Reference to Open to open site in browser

var port = 4000; //Stores the port we will use
var app = express(); //Create an instance of express and set to the variable app

app.get('/', function(req, res) { //Tell express which routes to handle. Any references to route should handle this function. Sees we request the route then runs th efule index.html
    res.sendFile(path.join(__dirname, '../src/index.html')); //Dir name to get directory we are running in. Join together with path to the source file and the file.
});

app.listen(port, function(err) { //Listen for the port we defined above and if there is an error then log to console
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port); //Else if all is good then just open the address of the site and the port we will hit.
  }
})