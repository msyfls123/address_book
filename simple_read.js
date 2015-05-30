var fs = require('fs');
var options = { encoding: 'utf-8' };
fs.readFile("data.json",options,function(err,data){
	console.log(data);
})