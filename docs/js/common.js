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

// check phone
var phoneError = document.querySelector('.review-form__error-phone');
var submitBtn = document.querySelector('.review-form__submit');

if(submitBtn) {
	submitBtn.addEventListener('click', function(e) {
		var phone = document.querySelector('#phone').value;

		if(phone == '' || !phone.match(/[0-9]{11}/)) {
			e.preventDefault();
			phoneError.classList.add('review-form__error-phone--active');
			phoneError.scrollIntoView();
		}
		else {
			e.stopPropagation();
			phoneError.classList.remove('review-form__error-phone--active');
		}
	});
}

// Modal
var modal = document.querySelector('.modal');
var btnClose = document.querySelector('.modal__close');
var btnSearch = document.querySelector('.hotel__btn-search');

if(btnSearch) {
	btnSearch.addEventListener('click', function(e) {
		e.preventDefault();
		modal.classList.add('modal--open');

		document.onkeydown = function(evt) {
			evt = evt || window.event;
			if (evt.keyCode == 27) {
				modal.classList.remove("modal--open");
			}
		};

	});
}

if(btnClose) {
	btnClose.addEventListener('click', function(e) {
		e.preventDefault();
		modal.classList.remove('modal--open');
	});
}


// Form search hotels
var adults = document.querySelector('#adults');
var minAdults = document.querySelector('.hotel-form__minus--adults');
var plusAdults = document.querySelector('.hotel-form__plus--adults');
var child = document.querySelector('#children');
var minChild = document.querySelector('.hotel-form__minus--children');
var plusChild = document.querySelector('.hotel-form__plus--children');

if(minAdults) {
	minAdults.addEventListener('click', function(e) {
		e.preventDefault();
		if(adults.value != 1  && adults.value > 0) {
			adults.value = adults.value - 1;
		}
	});
}

if(plusAdults) {
	plusAdults.addEventListener('click', function(e) {
		e.preventDefault();
		adults.value = parseInt(adults.value) + 1;
	});
}

if(minChild) {
	minChild.addEventListener('click', function(e) {
		e.preventDefault();
		if(child.value != 0 ) {
			child.value = child.value - 1;
		}
	});
}

if(plusChild) {
	plusChild.addEventListener('click', function(e) {
		e.preventDefault();
		child.value = parseInt(child.value) + 1;
	});
}

if(adults) {
	adults.addEventListener('change', function(e) {
		if(adults.value < 0) {
			adults.value = 1;
		}
	});
}


// Maps
function initMap() {
	var myLatLng = {lat: 34.8697395, lng: -111.7609896};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 8,
		center: myLatLng,
		scrollwheel: false
	});

	var isIE11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/)); // Detect whether it is IE11
	var icon = '../img/icon-marker.svg';

	if(isIE11) {
		icon = '../img/icon-marker.png';
	}

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