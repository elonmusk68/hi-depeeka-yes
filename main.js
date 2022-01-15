canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
rover_width =101;
rover_height =91;
rover_x=11;
rover_y=11;
background_img="mars.jpg";
rover_img="rover.png";

function add(){

background_imgtag=new Image();
background_imgtag.onload = uploadbackground;
background_imgtag.src= background_img;
rover_imgtag=new Image();
rover_imgtag.onload = uploadrover;
rover_imgtag.src= rover_img;
}
function uploadbackground(){
ctx.drawImage(background_img,0,0,canvas.width,canvas.height);

}
function uploadrover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}
    
    










