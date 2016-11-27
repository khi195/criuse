var cruiseData = require('../data/cruise.data.json')


module.exports.cruises = function(req, res){
 

if(req.query.offset){
    var offset = parseInt(req.query.offset,10); 
};

if(req.query.count){
    var count = parseInt(req.query.count,10); 
};

returnData = cruiseData.slice(offset, offset+count);

res.
    status(200).
    json(returnData);
}

module.exports.cruisesDestination = function(req, res){
 
var destinationID = req.params.destination;
var destinationID = destinationID.toLowerCase();
var destination = [];

 cruiseData.forEach( function(element){
     if (element.name.toLowerCase() === destinationID){
         destination.push(element);
        }
 })
 
res.
    status(200).
    json(destination);

}

module.exports.angular = function(req, res){

res
.send(200)
.sendFile('../../public')

}

