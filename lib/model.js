function userObject(){
	this.length = 0;
}
userObject.prototype.addProperty = function(key, value){
	if(!userObject.key){
		userObject.key = value;
		this.length++;
	}else{
		console.log('The property '+key+' already exists');
	}
}
userObject.prototype.editProperty = function(key, value){
	userObject.key = value;
}
userObject.prototype.deleteProperty = function(key){
	delete userObject.key;
	this.length--;
}
exports.createUserObject = function(){
	var obj = new userObject();
	return obj;
}
