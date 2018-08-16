//setting up canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var prevX = 0;
var prevY = 0;

//report the mouse position on click
canvas.addEventListener("click", function (evt) {
    var mousePos = getMousePos(canvas, evt);
    //alert(mousePos.x + ',' + mousePos.y);
     ctx.beginPath();
     ctx.lineWidth = "8";
     ctx.moveTo(prevX,prevY);
     ctx.lineTo(mousePos.x,mousePos.y);
     ctx.strokeStyle="#FCFDFD";
     ctx.stroke();
    prevX = mousePos.x;
    prevY = mousePos.y;
}, false);

//Get Mouse Position
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}


//My code
// var canvasSize = canvas.getBoundingClientRect();

// canvas.addEventListener("click", clickFunction); 

// var newX = 0;
// var newY = 0;



// function clickFunction() {



//     prevX = newX;
//     prevY = newY;
// }