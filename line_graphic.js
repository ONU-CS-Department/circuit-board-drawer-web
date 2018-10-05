//setting up canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var prevX = 0;
var prevY = 0;



function drawingFunction() {
    var hasStartNode = document.getElementById("startNode");
    var hasEndNode = document.getElementById("endNode");
    var hasStartModule = document.getElementById("startModule");
    var hasEndModule = document.getElementById("endModule");
    var isContinuous = document.getElementById("continuous");
    var text = document.getElementById("text");

    if (hasStartNode.checked == true){
        text.style.display = "block";
        console.log("start Node");
    } else {
       text.style.display = "none";
    }

    if (hasEndModule.checked == true) {
        console.log("End Module");
    }
    if (hasEndNode.checked == true) {
        console.log("hasEndNode");
    }
    if (hasStartModule.checked == true) {
        console.log("hasStartModule");
    }
    if (hasEndModule.checked == true) {
        console.log("hasEndModule");
    }
    if (isContinuous.checked == true) {
        text.style.display = "block";
        console.log("its working");
        canvas.addEventListener("click", function (evt) {
            var mousePos = getMousePos(canvas, evt);
             ctx.beginPath();
             ctx.lineWidth = "8";
             ctx.moveTo(prevX,prevY);
             ctx.lineTo(mousePos.x,mousePos.y);
             ctx.strokeStyle="#FCFDFD";
             ctx.stroke();
            prevX = mousePos.x;
            prevY = mousePos.y;
        }, false);
    }
    else {
        text.style.display = "none";
    }
}



//report the mouse position on click


//Get Mouse Position
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}