var canvas = new fabric.Canvas('myCanvas');

width_block = 30;
height_block = 30;

player_X = 10;
player_Y = 10;

object_player = "";
var block_image = "";

function player_upload(){
fabric.Image.fromURL("player.png", function(img){
object_player = img;
object_player.scaleToWidth(150);
object_player.scaleToHeight(140);
object_player.set({
top:player_Y , left:player_X
});
canvas.add(object_player);
});
}
    
function new_image(get_image){
fabric.Image.fromURL(get_image, function(Block){
block_image = Block;
block_image.scaleToWidth(width_block);
block_image.scaleToHeight(height_block);
block_image.set({
top:player_Y , left:player_X
});
canvas.add(block_image);
});
}

window.addEventListener("keydown", my_keydown)
function my_keydown(e){
keypress = e.keyCode;
console.log(keypress);
if(keypress == "37"){
left();
console.log("leff");
}
if(keypress == "38"){
up();
console.log("up");
}
if(keypress == "39"){
right();
console.log("right");
}
if(keypress == "40"){
down();
console.log("down");
}
if(keypress == "70"){
new_image("ironman_face.png");
console.log("f");
}
if(keypress == "66"){
new_image("spiderman_body.png");
console.log("b");
}
if(keypress == "76"){
new_image("hulk_legs.png");
console.log("l");
}
if(keypress == "82"){
new_image("thor_right_hand.png");
console.log("r");
}
if(keypress == "72"){
new_image("captain_america_left_hand.png");
console.log("h");
}

if(e.shifKey == true && keypress =="80"){
block_width = block_width + 10;
block_height = block_height + 10;
}
if(e.shifKey == true && keypress =="77"){
block_width = block_width - 10;
block_height = block_height - 10;
}
}


function up(){
player_Y = player_Y - 10;
if(player_Y == 0){
player_Y = player_Y + 10;
}
canvas.remove(object_player);
player_upload();
}

function down(){
player_Y = player_Y + 10;    
if(player_Y == 450){
player_Y = player_Y - 10;
}
canvas.remove(object_player);
player_upload();
}

function right(){
player_X = player_X + 10;
if(player_X >= 850){
player_X = player_X - 10;
}
canvas.remove(object_player);
player_upload();
}

function left(){
player_X = player_X - 10;
if(player_X == 0){
player_X = player_X + 10;
}
canvas.remove(object_player);
player_upload();
}