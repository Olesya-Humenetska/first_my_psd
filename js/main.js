$( document ).ready(function() {
    $('#header').on('click','.navigation', function() {
    	$(this).find('.nav-menu').toggleClass('opened');
    })
});

window.onload = function () {

	var latlng = new google.maps.LatLng(49.785051, 24.059362);

	var myOptions = {
	zoom: 15,
	center: latlng,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	disableDefaultUI: false
	};

	map = new google.maps.Map(document.getElementById('map'), myOptions);
}