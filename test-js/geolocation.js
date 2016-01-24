

module.exports.getUserLocation = function(){
	var userObj = {}
	navigator.geolocation.getCurrentPosition(getLocation,getError);

		 function getLocation(obj){
		 	userObj["lat"] = 55;
		 	userObj["longi"] = 66;

		 }

		 function getError(e){
		 	return e;

		 }
	return userObj;

};





