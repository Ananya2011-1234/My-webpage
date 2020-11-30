var mouseevent="empty";
var last_x,last_y;
canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d"); color = "black";
 width_of_line = 1;
 canvas.addEventListener("mousedown",mousedown);
function mousedown(e){
    color=document.getElementById("color").Value;
    widthofline=document.getElementById("widthofline").Value;
mouseevent="mousedown";
}
canvas.addEventListener("mousemove",mousemove);
function mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.clientY - canvas.offsetTop;
     if(mouseevent=="mousedown"){
         ctx.beginpart();
         ctx.strokestyle=color;
         ctx.linewidth=widthofline;
         console.log("last position of x and y coardinate=");
         console.log("x = " + last_x + "y = " + last_y);
          ctx.moveTo(last_x, last_y);
          console.log("current position of x and y coardinate=");
          console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
           ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
            ctx.stroke();

     }
     last_x=current_position_of_mouse_x;
     last_y=current_position_of_mouse_y;
}
canvas.addEventListener("mouseup",mouseup);
function mouseup(e){
mouseevent=mouseup;
}
canvas.addEventListener("mouseleave",mouseleave);
function mouseleave(e){
mouseevent=mouseleave;
}
function cleararea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}