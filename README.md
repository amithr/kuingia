# Kuingia

## Project

This is a project meant for developers to get a user login system up and running instantly
in node. It's supposed to be intuitive and simple, while still maintaining a minimum level of functionality. This is obviously not meant for production.

Oh and 'kuingia' means 'to enter' in Swahili.

## Installation

You can install this package via npm.

## Documentation

### Create a user

```javascript
var kuingia = require('kuingia');
var email = coolguy26@gmail.com,
	password = 'coolestGuy2'
kuingia.createUser(email, password, function(status, response){
	if(status === true){
		console.log(response);
	}
})
```
### Retrieve a user

The user information is returned in the response variable in JSON.

```javascript
var email = coolguy26@gmail.com,
	password = 'coolestGuy2'

kuingia.retrieveUser(email, password, function(status, response){
	if(status === true){
		console.log('User successfully retrieved.');
		console.log(response);
	}
})
```
### Validate a user

This checks whether or not the user exists, and if it does, whether or not the
correct password corresponding to the user was entered.

```javascript
kuingia.validateUser(email, password, function(status, response){
	if(status === true){
		console.log('User successfully retrieved.');
		console.log(response);
	}
})
```

### Delete a user

```javascript
kuingia.deleteUser(email, password, function(status, response){
	if(status === true){
		console.log('User successfully retrieved.');
		console.log(response);
	}
});
```

### Edit user data

So any user data is stored as JSON string in mongo. This
JSON string originates from an object.

You can create that user data object like so.

```javascript
var userObject = kuingia.createUserObject();
```

The resulting object has server methods you may utilize.

In order to add a new proper to a new, say for example gender:

```javascript
var userObject = kuingia.createUserObject();
userObject.addProperty(gender, 'female');
```

To edit that same property:

```javascript
var userObject = kuingia.createUserObject();
userObject.editProperty(gender, 'male');
```

To delete that property:

```javascript
var userObject = kuingia.createUserObject();
userObject.deleteProperty(gender);
```

Then, when you want to add that object to the login system:

```javascript
var email = coolguy26@gmail.com,
	userObject = kuingia.createUserObject();
userObject.addProperty(gender, 'female');
kuingia.editUserData(email, userObject, function(status, response){
	if(status === true){
		console.log(response);
	}
})
```
To actually edit an existing user object, you could simply
retrieve the JSON user object and edit that and reinsert into the system. Making
that process less cumbersome is a task for the future.







