const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,box1,box2,box3,box4,ground1,pig1,pig2,log1,log2,log3,log4,log5,bird;
function setup() {
  var canvas= createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  ground1=new Ground(600,height,1200,20);
  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  box3=new Box(700,240,70,70);
  box4=new Box(920,240,70,70);
  pig1=new Pig(810,350);
  pig2=new Pig(810,220);
  log1=new Log(810,260,400,90);
  log2=new Log(810,180,400,90);
  bird=new Bird(50,50);
  //console.log(box2.body.position.x);
  //console.log(box2.body.position.y);
  //console.log(box2.body.angle);
  //console.log(PI/3);
  //console.log(PI);
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground1.display();
  box1.display();
  pig1.display();
  box2.display();
  log1.display();
  box3.display();
  pig2.display();
  box4.display();
  log2.display();
  bird.display();
}


