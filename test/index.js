var model = require('../lib/model');
var mongo = require('../lib/mongo');


describe('mongo', function(){
	describe('#newUser', function(){
		it('should create a new user without error', function(done){
			var rand = Math.floor(Math.random()*1000000001);
			var testEmail = 'amithravindar2493'+rand+'@gmail.com';
			mongo.newUser(testEmail, 'sulochanadevi', function(status, response){
				if(status === false) throw(response);
				done();
				mongo.deleteUser(testEmail, function(status, response){});
			});
		})
	});
	describe('#deleteUser', function(){
		it('should delete a user without error', function(done){
			var rand = Math.floor(Math.random()*1000000001);
			var testEmail = 'amithravindar2493'+rand+'@gmail.com';
			mongo.newUser(testEmail, 'sulochanadevi', function(createStatus, response){
				mongo.deleteUser(testEmail, function(deleteStatus, response){
					if(deleteStatus === false) throw(response);
					done();
				});
			});
		});
	});
	describe('#retrieveUser', function(){
		it('should retrive a user without error', function(done){
			var rand = Math.floor(Math.random()*1000000001);
			var testEmail = 'amithravindar2493'+rand+'@gmail.com';
			mongo.newUser(testEmail, 'sulochanadevi', function(createStatus, response){
				mongo.retrieveUser(testEmail, function(retrieveStatus, response){
					if(retrieveStatus === false) throw(response);
					done();
					mongo.deleteUser(testEmail, function(status, response){});
				});
			});
		})
	});
	describe('#validateUser', function(){
		it('should validate a user successfully', function(done){
			var rand = Math.floor(Math.random()*1000000001);
			var testEmail = 'amithravindar2493'+rand+'@gmail.com';
			mongo.newUser(testEmail, 'sulochanadevi', function(createStatus, response){
				mongo.validateUser(testEmail, 'dasdasdas', function(validationStatus, response){
					if(validationStatus === false) done();
					mongo.deleteUser(testEmail, function(status, response){});
				});
			});
		})
	});
	describe('#editUserData', function(){
		it('should successfully edit the userData object', function(done){
			var rand = Math.floor(Math.random()*1000000001);
			var testEmail = 'amithravindar2493'+rand+'@gmail.com';
			mongo.newUser(testEmail, 'sulochanadevi', function(createStatus, response){
				//I guess model is tested here
				var userData = model.createUserObject();
				mongo.editUserData(testEmail, userData, function(editStatus, response){
					if(editStatus === true) done();
					mongo.deleteUser(testEmail, function(status, response){});
				});
			});
		});
	});
});