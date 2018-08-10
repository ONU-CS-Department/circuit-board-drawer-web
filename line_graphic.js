console.log("Is this thing working?");

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300,150);
ctx.strokeStyle="#FCFDFD";
ctx.stroke();
ctx.fillStyle="#FFFFFF";
ctx.fillRect(50,200,20,20);
