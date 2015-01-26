//Gobal Variables
var btn = document.getElementById("btn");
var canvasDiv = document.getElementById("canvasDiv");

//Scaffolding Code
var scafDiv = document.getElementById("scaffolding");
var scafPar = document.getElementById("scafPar");
var scafFresh = document.getElementById("scafFresh");
var scafString = "";
var FlagCanCreation = false;


////88888888888////88888888888////888888888//////8888888888////
////88888888888////88888888888////8888888888/////8888888888////
////888////////////888/////888////8888///8888////888///////////
////888////////////888/////888////8888///8888////8888888888////
////888////////////888/////888////8888///8888////8888888888////
////888////////////888/////888////8888///8888////888///////////
////88888888888////88888888888////8888888888/////8888888888////
////88888888888////88888888888////888888888//////8888888888////

//Scaffolding Refresh btn
var updateScaffolding = function(){
    scafPar.innerHTML += scafString + "<br>";
};
var scafFresh = scafFresh.addEventListener("click", function(ev){
    ev.preventDefault();
    scafPar.innerHTML = scafString;

});

//
var buttonFunction = btn.addEventListener("click", function(ev){
    ev.preventDefault();
    if(FlagCanCreation == false){
    var canvas = document.createElement("canvas");
    canvas.setAttribute("height", 400);
    canvas.setAttribute("width", 400);
    canvasDiv.appendChild(canvas);
    FlagCanCreation = true;}else{}
    scafString = FlagCanCreation;
    updateScaffolding();
});

document.addEventListener("DOMContentLoaded", function(){
});
