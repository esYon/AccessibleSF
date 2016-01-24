var userCords;

if (navigator.geolocation) {    
    
      function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
      }
      
      function success(pos){
        userCords = pos.coords;
        
        //return userCords;
      }
    
      // Get the user's current position
      navigator.geolocation.getCurrentPosition(success, error);
      //console.log(pos.latitude + " " + pos.longitude);
      } else {
        alert('Geolocation is not supported in your browser');
      }








//map options
    var mapOptions = {
      zoom: 5,
      center: new google.maps.LatLng(37.09024, -100.712891),
      panControl: false,
      panControlOptions: {
        position: google.maps.ControlPosition.BOTTOM_LEFT
      },
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.RIGHT_CENTER
      },
      scaleControl: false

    };

map = new google.maps.Map(document.getElementById('map'), mapOptions);