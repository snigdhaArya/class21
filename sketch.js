
  
var fixedRect, movingRect;
var object1,object2,object3,object4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1=createSprite(150,100,30,30);
  object1.shapeColor="yellow";
  object2=createSprite(150,500,30,30);
  object2.shapeColor="blue";
  object3=createSprite(650,100,30,30);
  object3.shapeColor="red";
  object4=createSprite(500,500,30,30);
  object4.shapeColor="white";
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  object1.velocityY = +5;
  object2.velocityY = -5;
  object3.velocityY = +5;
  object4.velocityY = -5;
}

function draw() {
  background(0,0,0);  

 bounceOff(object1,object2);
    
 

  drawSprites();
}

function bounceOff(object1,object2){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);
}
}

