var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,60,24);
}
  
function draw() 
{
  
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x +5;
    background("red");
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x -5;
    background("blue");
  }
  if(keyIsDown(UP_ARROW)){
    //box.position.x = box.position.x -5;
    background("yellow");
  }
  if(keyIsDown(DOWN_ARROW)){
    //box.position.x = box.position.x -5;
    background("purple");
  }
  drawSprites();
}
  



