$(document).ready(function(){

var addColor = function(arr) {
var colorsArray = ["green", "red", "yellow", "blue"];
return arr.push(colorsArray[Math.floor(Math.random() * colorsArray.length)]);
};


});
