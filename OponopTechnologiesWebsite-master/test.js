var express = require("express");
var app = express()

console.log('Starting the Website ...');

app.use(express.static('.'));
var server = app.listen(5000);