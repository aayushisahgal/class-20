var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 30, 80);
  movingRect = createSprite(600,200, 80, 30);
  fixedRect.shapeColor = "purple";
  movingRect.shapeColor = "purple";
  fixedRect.velocityX=2;
  movingRect.velocityX=-2


  fixedRect.debug = true;
  movingRect.debug = true;

}

function draw() {
  background("pink");  
  // movingRect.x = mouseX;
  // movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2&&
    fixedRect.y - movingRect.y  < movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "red";
    movingRect.velocityX *=(-1);
    fixedRect.velocityX *=(-1);
    movingRect.velocityY *=(-1);
    fixedRect.velocityY *=(-1);

  }
  else{
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}