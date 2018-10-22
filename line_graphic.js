//setting up canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var prevX = 0;
var prevY = 0;
i = 0;

canvas.addEventListener("click", function(evt) {
    drawingFunction(evt);
});

function drawingFunction(evt) {
    var hasStartNode = document.getElementById("startNode");
    var hasEndNode = document.getElementById("endNode");
    var hasStartModule = document.getElementById("startModule");
    var hasEndModule = document.getElementById("endModule");
    var isContinuous = document.getElementById("continuous");
    var text = document.getElementById("text");

    var mousePos = getMousePos(canvas,evt);
    ctx.lineWidth = "8";
    ctx.strokeStyle="#FCFDFD";
    ctx.fillStyle="#FCFDFD";

   
    
    
    
    if (isContinuous.checked == true) {
        if (hasStartModule.checked == true) {
            ctx.fillRect(prevX,prevY,10,20);
            ctx.stroke();
            console.log("hasStartModule");
        }
        if (hasStartNode.checked == true){
            ctx.beginPath();
            ctx.arc(prevX,prevY,15,0,2*Math.PI);
            ctx.stroke();
            console.log("start Node");
        }
        ctx.beginPath(); 
        ctx.moveTo(prevX,prevY);
        ctx.lineTo(mousePos.x,mousePos.y);
        ctx.stroke();
        prevX = mousePos.x;
        prevY = mousePos.y;
        if (hasEndModule.checked == true) {
            ctx.fillRect(mousePos.x,mousePos.y,10,20);
            ctx.stroke();
            console.log("End Module");
        }
        if (hasEndNode.checked == true) {
            ctx.beginPath();
            ctx.arc(mousePos.x,mousePos.y,15,0,2*Math.PI);
            ctx.stroke();
            console.log("hasEndNode");
        }
    }
    //Draw normally
    else {
        if(i == 1) {
            ctx.beginPath(); 
            ctx.moveTo(prevX,prevY);
            ctx.lineTo(mousePos.x,mousePos.y);
            ctx.stroke();
             
            i = 0;
        }
        else {
            prevX = mousePos.x;
            prevY = mousePos.y;
            i++;
        }  
         }
}

//Get Mouse Position
 function getMousePos(canvas,evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
}
