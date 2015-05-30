var Command = {};

Command.getOperation = function() {
  return process.argv[2];
}

Command.getOperationData = function() {
  return process.argv[3];
}

Command.add = function(done) {
	var contact=this.getOperationData()
	var Ct=require('./contact')
	contactObj=Ct.createContact(contact)
	Ct.saveContact(contactObj,done)
}

Command.find = function(done) {
	var data=this.getOperationData()
	var Ct=require('./contact')
	Ct.findContacts(data,function(err,foundContacts){
		if(err){return done(err)}
		foundContacts.forEach(function(contact){
			console.log(contact.name,contact.number)
		})
		
		done(null,foundContacts)
	})
	

  // extracts the name from the command line arguments e.g. "John Smith"
  // searches for the contacts matching the given name using Contact.findContacts
  // prints the matched contacts
  // returns the matched contacts array via done callback
  // e.g. done(err, foundContacts)
  // where foundContacts is the array of contacts that matched the search
  // err is the value for the error (null if no error was encountered)
}

Command.list = function() {
	var Ct=require('./contact')
	Ct.listContacts()
}

module.exports= Command