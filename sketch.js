var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1400,800);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  wall=createSprite(1200,200,thickness,height/2);  
  bullet=createSprite(300,200);
  bullet.velocityX=speed;

 
}

function draw() {
  background(0);
  
 if(hasCollided(bullet,wall)===true){
   bullet.velocityX=0;
  var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

  if(damage<10){
    wall.shapeColor="green";
  
  }
  else{
    wall.shapeColor="red";
  }
 }


  
  drawSprites();
}
function hasCollided(lBullet,lWall){
  bulletRightEdge=lBullet.x+lBullet.width;
  wallLeftEdge=lWall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;  
  }
  return false;
}
