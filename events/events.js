
//Gobal Variables
var WAIBtn, FlagCanCreation = false, canvas, output;

//Scaffolding Code
var scafDiv, scafPar, scafFresh, scafString;


////88888888888////88888888888////888888888//////8888888888////
////88888888888////88888888888////8888888888/////8888888888////
////888////////////888/////888////8888///8888////888///////////
////888////////////888/////888////8888///8888////8888888///////
////888////////////888/////888////8888///8888////8888888///////
////888////////////888/////888////8888///8888////888///////////
////88888888888////88888888888////8888888888/////8888888888////
////88888888888////88888888888////888888888//////8888888888////

//Scaffolding Refresh WAIBtn
var updateScaffolding = function(){
    scafPar.innerHTML += scafString + "<br>";
};
var scafFresh = scafFresh.addEventListener("click", function(ev){
    ev.preventDefault();
    scafPar.innerHTML = scafString;

});

//position stuff
function reportPosition( position ){ 
  var output = document.querySelector("#output");
  output.innerHTML += "<br>" + "Latitude: " + position.coords.latitude + "&deg;<br/>"
  + "Longitude: " + position.coords.longitude + "&deg;<br/>"
  + "Accuracy: " + position.coords.accuracy + "m<br/>"
  + "Altitude: " + position.coords.altitude + " m<br/>"
  + "Heading: " + position.coords.heading + " &deg;<br/>"
  + "Speed: " + position.coords.speed + " m/s<br/>"
  + "Timestamp: " + position.timestamp + "<br>";
    var img = document.createElement("img");
    img.setAttribute("src", "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=14&size=400x400&markers=color:blue%7C" + position.coords.latitude + "," + position.coords.longitude);
    output.appendChild(img);
}

//Where am I button
WAIBtn.addEventListener("click", function(ev){
    ev.preventDefault();
    if(FlagCanCreation == false){
    var canvas = document.createElement("canvas");
    canvas.getContext("2d");
    canvas.setAttribute("height", 400);
    canvas.setAttribute("width", 400);
    canvasDiv.appendChild(canvas);
    FlagCanCreation = true;}else{}
    scafString = FlagCanCreation;
    updateScaffolding();
    findMe();
});



document.addEventListener("DOMContentLoaded", function(){
    
var WAIBtn = document.getElementById("WAIBtn");
var canvasDiv = document.getElementById("canvasDiv");
    
    //Scaffolding Code
var scafDiv = document.getElementById("scaffolding");
var scafPar = document.getElementById("scafPar");
var scafFresh = document.getElementById("scafFresh");
var scafString = "";
    
    if( navigator.geolocation ){ 
    //code goes here to find position
    var params = {enableHighAccuracy: false, timeout:3600, maximumAge:60000};
    //enableHighAccuracy means try to use GPS and drain the battery
    //for improved accuracy within a few meters.
    //maximum age is how long to cache the location info
    //timeout is how long to wait for the network to respond after the user says ok
    navigator.geolocation.getCurrentPosition( reportPosition, gpsError, params ); 
    
    //to continually check the position (in case it changes) use
    // navigator.geolocation.watchPosition( reportPosition, gpsError, params)
  }else{
    //browser does not support geolocation api
    alert("Sorry, but your browser does not support location based awesomeness.")
  }
});



function gpsError( error ){   
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}
