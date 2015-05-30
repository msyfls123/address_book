var Contact = {}

Contact.parseName = function(str) {
	return str.split(",")[0].trim();
}

Contact.parseNumber = function(str) {
	return str.split(",")[1].trim();
}

Contact.createContact = function(str) {
	return {
	  name: this.parseName(str),
	  number: this.parseNumber(str)
	}
}

Contact.loadContacts = function(done) {
	 var jsonfile=require("jsonfile");
   var util=require("./util")
	 jsonfile.readFile(util.getDataPath(),function(err,data){
	 	done(err,data)
	 })
}

Contact.saveContacts = function(contacts, done) {
	var jsonfile=require("jsonfile");
  var util=require("./util")
	jsonfile.writeFile(util.getDataPath(),contacts,function(err){
	 	done(err)
	 })
}

Contact.saveContact = function(contact, done) {
	var _this=this
   this.loadContacts(function(err,contacts){
   	if(err){return done(err)}
   	contacts.push(contact)
   _this.saveContacts(contacts,done)
   })
}

Contact.findContacts = function(name, done) {
    this.loadContacts(function(err,contacts){
  	if(err){return done(err)}
  	var foundContacts=contacts.filter(function(contact){
  		return contact.name==name;
  	})
  	done(err,foundContacts)
  })
  // you need to load the contacts array from `data.json`
  // search the ones matching the given name
  // and return them as an array of contacts via the done callback
  // e.g. done(err, foundContacts)
  // where foundContacts is the array of contacts that matched the search
  // err is the value for the error (null if no error was encountered)
}

Contact.listContacts = function() {
   this.loadContacts(function(err,data){
     for (var i = 0; i <= data.length - 1; i++) {
       console.log(data[i])
     }
   })
}

module.exports = Contact