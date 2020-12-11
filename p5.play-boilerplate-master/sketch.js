var Mrect,Frect




function setup() {
  createCanvas(800,400);
 Frect= createSprite(400, 200, 50, 50);
Frect.shapeColor="green"
  Mrect=createSprite(200,200,50,50);
Mrect.shapeColor="green"
}

function draw() {

  background(255,255,255);  
Mrect.x=mouseX
Mrect.y=mouseY

if(Mrect.x-Frect.x<Mrect.width/2+Frect.width/2&&
 Frect.x-Mrect.x<Mrect.width/2+Frect.width/2&&
 Mrect.y-Frect.y<Mrect.height/2+Frect.height/2&&
 Frect.y-Mrect.y<Mrect.height/2+Frect.height/2
){
  Frect.shapeColor="blue"
  Mrect.shapeColor="blue"
}
else{
  Mrect.shapeColor="Green"
}

  drawSprites();
}