var cruiseData = require('../data/cruise.data.json')


module.exports.cruises = function(req, res){
 
// query string
// offset: starting point
// count:  how many after start
if(req.query && req.query.offset && req.query.count){
    var offset = parseInt(req.query.offset,10); 
    var count = parseInt(req.query.count,10);
    returnData = cruiseData.slice(offset, offset+count);
} else{
    returnData = cruiseData;
}

    res
        .status(200)
        .json(returnData);

}


// find cruise by destination 
module.exports.cruisesDestination = function(req, res){
 
var destinationID = req.params.destination;
var destinationID = destinationID.toLowerCase();
var destination = [];

 cruiseData.forEach( function(element){
     if (element.name.toLowerCase() === destinationID){
         destination.push(element);
        }
 })
 
    if (destination.length > 0 ){
        res
            .status(200)
            .json(destination);
    }else{
        res
            .status(404)
            .send("This destination does not exist"); 
    }
}

