var express = require('express');
var app = express();
const path = require('path');
var routes = require('./api/routes');

app.set('port', 3000);

app.get('/',  function(req, res){
res.
    status(200).
    json('Hello from cruise app');
});

app.use('/', routes);

app.use('/home', express.static(path.join(__dirname, 'public')))

var server = app.listen(app.get('port'),  function(){
console.log("Listening to port on ", app.get('port'));
});

