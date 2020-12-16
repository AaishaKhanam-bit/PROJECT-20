var car,wall,spped,weight,diformation

function setup() {
  createCanvas(1000,400);
  car=createSprite(50, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  wall=createSprite(900,200,60,200);
  car.velocityX=10;
}


function draw() {
  background("turquoise"); 
  if (wall.x-car.x< (wall.width+car.width)/2){
    car.velocityX=0;
    deformation=0.5 * weight* speed* speed/22500
    console.log(deformation)
    if (deformation>180)
    {
      car.shapeColor="red"

    }
    else if(deformation> 100){
      car.shapeColor="yellow"
    }
    else {car.shapeColor="green"
    }
  }
  drawSprites();
}