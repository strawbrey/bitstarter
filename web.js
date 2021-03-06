var express = require('express');
var fs = require('fs'); 
var app = express.createServer(express.logger());
var infile = "index.html";
var displayLine = fs.readFileSync(infile);

app.get('/', function(request, response) {
  response.send(displayLine.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
