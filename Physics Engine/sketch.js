const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var myEngine, myWorld;

var box1, ground;
var box2;
function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  //JSON - Javascript Object Notation
  var options = {
    isStatic : true
  }

  
  ground = Bodies.rectangle(200, 400, 400, 20, options);
  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);
  
  World.add(myWorld, ground);
 
  
  
}

function draw() {
  background("cornflowerblue");
  Engine.update(myEngine);
  
  fill("crimson");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

  fill("blueviolet");
  box1.display();
  box2.display();
}
