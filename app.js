var express = require('express');
var app = express();
const path = require('path');
var routes = require('./api/routes');

app.set('port', 3000);

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', routes);

var server = app.listen(app.get('port'),  function(){
console.log("Listening to port on ", app.get('port'));
});

