function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 40.818976051031825,
			lng: -96.7036812027826,
		},
		zoom: 4.5,
		mapId: 'MAP_ID',
		mapTypeControl: false,
		fullscreenControl: true,
		streetViewControl: false,
	});
}
	
