var Util = {}

Util.getHomeDirectory = function() {
  if(process.platform === "win32"){
  	return process.env.USERPROFILE
  }else{
  	return process.env.HOME
  }
}

Util.getDataPath = function(){
	var path=require('path')
	return path.join(this.getHomeDirectory(),'data.json')
}

module.exports = Util