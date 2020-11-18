var movingRect, fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor="green"
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="green"


}

function draw() {
  background(255,255,255);  
  drawSprites();
}