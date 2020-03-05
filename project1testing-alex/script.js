// openlayers

// let longitudeMap = 37.41;
// let latitudeMap = 8.82;

// let map = new ol.Map({
// target: 'map',
// layers: [
//     new ol.layer.Tile({
//     source: new ol.source.OSM()
//     })
// ],
// view: new ol.View({
//     center: ol.proj.fromLonLat([longitudeMap, latitudeMap]),
//     zoom: 10 //higher numbers zoom in further
// })
// });

// $.getJSON('https://ipapi.co/8.8.8.8/json/', function(data){
//     let response = data;
//     console.log(response);
// })
let response;
let state;
let city;
let latitude;
let longitude;

$.ajax(({
    url: "https://ipapi.co/json/",
    method: "GET"
})).then(function(data){
    response=data;
    console.log(response);
    let state = response.region_code;
    let city=response.city;
    let latitude=response.latitude;
    let longitude=response.longitude;
    console.log("Here are the five closest parks in " + city + " " + state + "!")
    console.log("Your latitude is " + latitude + " and your longitude is " + longitude);
    
})
