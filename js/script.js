$(function(){

	$( document ).ready(function() {
    
    	$('form').submit(function( event ) {
  		alert('Заявка отправлена!');
		});
	});
});

      function initMap() {
        const myLatLng = { lat: 51.09819359447466, lng: 71.41491766955492};
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: myLatLng,
        });
       var marker = new google.maps.Marker({
          position: myLatLng,
          map,
          title: "Hello World!",
          icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        });
        var marker2 = new google.maps.Marker({
          position: {lat: 51.096589808805255, lng: 71.42617196567296},
          map,
          title: "Hello World!",
          icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        });
        var marker3 = new google.maps.Marker({
          position: {lat: 51.101689107511085, lng: 71.41344025090514},
          map,
          title: "Hello World!",
          icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        });

        var info = new google.maps.InfoWindow({
        	content: '<h3>Жк Панорама</h3> <p>8(747)277-99-99</p>'
        });
        var info2 = new google.maps.InfoWindow({
        	content: '<h3>Жк Dream City</h3> <p>8(747)277-99-99</p>'
        });
        var info3 = new google.maps.InfoWindow({
        	content: '<h3>Жк Ботанический</h3> <p>8(747)277-99-99</p>'
        });

        marker.addListener("click", function() {
        	info.open(map, marker);
        });
        marker2.addListener("click", function() {
        	info2.open(map, marker2);
        });
        marker3.addListener("click", function() {
        	info3.open(map, marker3);
        });
      }
      

 function slowScroll(id){
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 2000);
}			