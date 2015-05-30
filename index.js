#!/usr/bin/env node
function handleResult(err) {
  if (err) {
    console.log('Error!')
  } else {
    console.log('OK! The command ran successfully!')
  }
}

var Command = require('./command')

var operator=Command.getOperation()
switch(operator){
	case "add":
	    Command.add(handleResult);
	 	break;
	case "find":
	    Command.find(handleResult);
	    break;
	case "list":
	    Command.list();
	    break;
	default:
		return console.log("Unknown command!")
}