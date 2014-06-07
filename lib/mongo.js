var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
var UserSchema = mongoose.Schema({
	email: String,
	password: String,
	serial: Number,
	userData: String
});

var User = mongoose.model('User', UserSchema);
	exports.setDB = function(DBname){
		mongoose.connection.close(); //If there is no connection its ok, otherwise close the connection and then set the datase
		var addr = 'mongodb://localhost/'+DBname;
		mongoose.connect(addr);
	}
	exports.newUser = function(email, password, callback){
		var query = User.findOne({'email':email});
		query.exec(function(err, user){
			if(err){
				console.log('Error: '+err);
				callback(false, err);
			}else{
				if(!user){
					var serial = Math.floor(Math.random()*1000000001);
					var newUser = new User({email:email,password:password,serial:serial});
					newUser.save(function(err){
						if(err){
							console.log('Error: '+err);
						}else{
							callback(true, 'User has been successfully created');
						}	
					});
				}else{
					console.log('User already exists');
					callback(false, 'User already exists');
				}
			}
		});

	}
	exports.deleteUser = function(email, callback){
		var query = User.findOne({'email':email}).remove();
		query.exec(function(err, msg){
			if(err) callback(false, err);
			else callback(true, msg);
		});
	}
	exports.editUserData = function(email, userData, callback){
		var query = User.findOne({'email':email});
		query.exec(function(err, user){
			user.userData = userData;
			user.save(function(err){
				if(err){
					console.log('Error: '+err);
					callback(false, err);
				}else{
					var msg = 'User successfully edited.';
					callback(true, msg);
				}

			});
		});
	}
	exports.retrieveUser = function(email, callback){
		var query = User.findOne({'email':email})
		query.exec(function(err, user){
			if(err){
				console.log("Error: "+err);
				callback(false, err);
			}else{
				callback(true, user);
			}
		});
	}
	exports.validateUser = function(email, password, callback){
		var query = User.findOne({'email':email});
		query.exec(function(err, user){
			if(err){
				console.log('Error: '+err);
				callback(false, err);
			}else{
				if(!user){
					callback(false ,'User does not exist.');
				}else{
					if(user.password === password){
						callback(true, 'User is valid.');
					}else{
						callback(false, 'User exists, but password is incorrect.');
					}
				}
			}
		});
	}