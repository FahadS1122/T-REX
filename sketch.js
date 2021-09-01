
function setup() {
  createCanvas(400,400);
box= createSprite(200,200,40,40)
}
var box 



function draw() 
{
  background(30);
drawSprites()
if(keyIsDown(RIGHT_ARROW)){box.position.x+=1.75}
if(keyIsDown(LEFT_ARROW)){box.position.x-=1.75}
if(keyIsDown(UP_ARROW)){box.position.y-=1.75}
if(keyIsDown(DOWN_ARROW)){box.position.y+=1.75}
}




