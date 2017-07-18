var nav = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__toggle');
var navList = document.querySelector('.nav__list');

nav.addEventListener('click', function(e) {
	if(nav.classList.contains('nav--closed')) {
		nav.classList.remove('nav--closed');
		nav.classList.add('nav--opened');
	}
	else {
		nav.classList.remove('nav--opened');
		nav.classList.add('nav--closed');
	}
});

if(nav.classList.contains('nav--nojs')) {
	nav.classList.remove('nav--nojs');
}


// Maps
function initMap() {
	var myLatLng = {lat: 34.8697395, lng: -111.7609896};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 8,
		center: myLatLng,
		scrollwheel: false
	});

	var icon = '../img/icon-marker.svg';

	map.addListener('click', function(){
		map.setOptions({scrollwheel: true});
	});
	map.addListener('mouseout', function(){
		map.setOptions({scrollwheel: false});
	});

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Sedona',
		icon: icon
	});
}

initMap();