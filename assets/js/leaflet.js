var map = L.map("map").setView([51.505, -0.09], 12);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([51.508, -0.11], {
	color: "red",
	fillColor: "#f03",
	fillOpacity: 0.5,
	radius: 500,
}).addTo(map);

var circle02 = L.circle([51.486, -0.11], {
	color: "blue",
	fillColor: "#00A3FF",
	fillOpacity: 0.5,
	radius: 200,
}).addTo(map);

var polygon = L.polygon([
	[51.509, -0.08],
	[51.503, -0.06],
	[51.51, -0.047],
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am here.").openPopup();
circle.bindPopup("I am a circle.");
circle02.bindPopup("I am another circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup();

function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(map);
}

map.on("click", onMapClick);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var map02 = L.map("map02").setView([22.57, 88.35], 12);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map02);
// longlat from geojson has to be reversed to latlongc to plot using LEaflet
var polygon02 = L.polygon([
	[22.584603945664625, 88.34008337928202],
	[22.57395681538459, 88.32819939896359],
	[22.557658594402668, 88.32878771482223],
	[22.54961742917827, 88.34267196905523],
	[22.556897963710227, 88.35796818134418],
	[22.577107582501185, 88.35679154963032],
	[22.584603945664625, 88.34008337928202],
]).addTo(map02);

polygon02.bindPopup("I am a polygon.");

var popup02 = L.popup();

function onMapClick02(e) {
	popup02
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(map02);
}

// map02.on("click", onMapClick02);

// Geojson

var myGeoJsonPolygon = {
    "type": "Feature",
    "properties": {
        "name": "Eden Gardens Stadium ",
        "amenity": "Cricket Stadium",
        "popupContent": "This is where magic happens!"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates":[
            [
              [
                88.36825052007083,
                22.574494735542174
              ],
              [
                88.36825052007083,
                22.556342935080693
              ],
              [
                88.3868478547779,
                22.556342935080693
              ],
              [
                88.3868478547779,
                22.574494735542174
              ],
              [
                88.36825052007083,
                22.574494735542174
              ]
            ]
          ]
    }
};

var myStyle = {
    "color": "#8F00FF",
    "weight": 5,
    "opacity": 0.65
};

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
        layer.bindPopup(feature.properties.popupContent);
    }
}

L.geoJSON(myGeoJsonPolygon, {
    style: myStyle,
    onEachFeature: onEachFeature
}).addTo(map02);




/////////////////////////////////////////////////////////////////////////////////////////
