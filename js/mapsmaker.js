const map = L.map('map');
const tileUrl = 'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=bzG9fzD9Q56JFx106p0A';


$(document).ready(()=>{
     // FUNCTION THAT CALLS THE SETLOCATION FIUNCTION TO DISPLAY THE USERS LOCATION ON THE MAP
     let callPosition = (position)=>{
        console.log(position.coords.latitude, position.coords.longitude);
        setLocation(position.coords.latitude, position.coords.longitude);
    }

    // HANDLING ERRORS WHEN GETTING GEOLOCATION
    function showError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            alert("You denied the request for Geolocation.")
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.")
            break;
          case error.TIMEOUT:
            alert("The request to get user location timed out.")
            break;
          case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.")
            break;
        }
    }


    if (navigator.geolocation) {
        console.log('NAVIGATOR RAN');
        navigator.geolocation.getCurrentPosition(callPosition, showError);
        
    } else { 
        alert("Geolocation is not supported by this browser.")
    }



})

const setLocation = (lat,long)=>{
    map.setView([lat, long], 13);
        // SETTING THE STYLES FOR THE MAPS
    L.tileLayer(tileUrl, {
        maxZoom: 19,
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }).addTo(map)

    var markerIcon = L.icon({
        iconUrl: 'images/icon-location.svg',
        iconSize: [38, 50],
        popupAnchor: [-3, -76],
    })

    var marker = L.marker([lat,long], {icon: markerIcon}).addTo(map)

    }