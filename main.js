var canvas=document.getElementById("myCanvas");
var color= "black";
ctx=canvas.getContext("2d");


var mouse_event="empty";
var last_position_of_x;
var last_position_of_y;
var width_of_line=2;


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouse_event="mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouse_event="mouseUp";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    cpomx= e.clientX - canvas.offsetLeft
    cpomy= e.clientY - canvas.offsetTop

     if (mouse_event == "mousedown"){
     ctx.beginPath();
     ctx.strokestyle = color;
     ctx.linewidth = width_of_line;
     
     ctx.moveTo(last_position_of_x, last_position_of_y);
     ctx.lineTo(cpomx, cpomy);
     ctx.stroke();
     }
     last_position_of_x = cpomx;
     last_position_of_y = cpomy;
}