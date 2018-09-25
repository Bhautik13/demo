var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectionHandler = function connected(){
	console.log("Successfull Connection.");
	eventEmitter.emit('data_received');
}

eventEmitter.on("connection",connectionHandler);
eventEmitter.on('data_received', function(){
	console.log("Data received Succesfully.");
});

eventEmitter.emit("connection");

console.log("Program ended")


