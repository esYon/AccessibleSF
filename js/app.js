(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var geolocation = require("./geolocation");

geolocation();

var map;

window.initMap = function () {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
},{"./geolocation":2}],2:[function(require,module,exports){
module.exports = function(){

	navigator.geolocation.getCurrentPosition(getLocation,getError);

		 function getLocation(obj){
		 	console.log(obj.coords);

		 }

		 function getError(e){
		 	return e;

		 }

}


},{}]},{},[1])


//# sourceMappingURL=app.js.map
