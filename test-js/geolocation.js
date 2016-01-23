module.exports = function(){

	navigator.geolocation.getCurrentPosition(getLocation,getError);

		 function getLocation(obj){
		 	console.log(obj.coords);

		 }

		 function getError(e){
		 	return e;

		 }

}

