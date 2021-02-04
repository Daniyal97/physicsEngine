const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;
var ball2;

function setup() {
  createCanvas(400,400);

  myEngine= Engine.create();
  myWorld= myEngine.world;

  ground= Bodies.rectangle(200,380,400,10,{isStatic:true});
  World.add(myWorld,ground);
  console.log(ground);

  var options={
    restitution:2,
    density:0.5
  }

  ball = Bodies.circle(100,100,25,options);
  World.add(myWorld,ball);
 
  ball2 = Bodies.circle(200,200,30,options);
  World.add(myWorld, ball2);
  
}

function draw() {
  background("Pink"); 
  Engine.update(myEngine);

  fill("Green");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  
  fill("red");
  ellipseMode(RADIUS);
  circle(ball.position.x,ball.position.y,25);

  ellipseMode(RADIUS);
  circle(ball2.position.x, ball2.position.y,30);
}