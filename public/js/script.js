
function myMap() {

    const myLatLng = {lat: 31.112320226557003, lng: -97.76162629557632};

    var mapProp = {

        center: myLatLng,
        zoom: 17,

    };

    var map = new google.maps.Map(document.getElementById("location-map"), mapProp);

    var marker = new google.maps.Marker({

        position: myLatLng,
        map,
        title: "Little Jamaica Restaurant and Lounge"

    });


}

function subscribe_newsletter() {

    

}