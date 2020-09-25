
var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
 movingRect= createSprite(400, 200, 50, 50);
  fixedRect= createSprite(200,200,50,80);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
     fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
     movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2 &&
     fixedRect.y-movingRect.y < fixedRect.width/2 + movingRect.width/2 ){
   
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
movingRect.y= World.mouseY;
movingRect.x= World.mouseX;


  drawSprites();
}