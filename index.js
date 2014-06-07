var mongo = require(./lib/model);
var model = require(./lib/mongo);

exports.createUser = function(email, password, callback){
	mongo.createUser(email, password, function(status, response){
		callback(status, response)
	});
}
exports.deleteUser = function(email, callback){
	mongo.deleteUser(email, function(status, response){
		callback(status, response);
	});
}
exports.editUserData = function(email, userData, callback){
	mongo.editUser(email, userData, function(status, response){
		callback(status, response);
	});
}
exports.retrieveUser = function(email, callback){
	mongo.retrieveUser(email, callback, function(response){
		callback(response);
	});
}
exports.validateUser = function(email, password, callback){
	mongo.validateUser(email, password, function(status, response){
		callback(status, response);
	});
};
exports.createUserObject = function(){
	var userObject = model.createUserObject();
	return userObject;
}
