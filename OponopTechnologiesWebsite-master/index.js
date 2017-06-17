var express = require("express");
var app = express();

app.set('port', (process.env.PORT || 5000));

console.log('Starting the Website ...');

app.use(express.static(__dirname));

var server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
