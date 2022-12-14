
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new Ground(width/2,670,width,20)
leftwall= new Ground(1000,600,20,120);
rightwall=new Ground(1300,600,20,120);

balloptions={
	restitution:1,
	isStatic:false,
density:1.2
}
ball=Bodies.circle(200,100,20,balloptions);
World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display()
  leftwall.display();
  rightwall.display();
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
 
}


function keyPressed() {
	 if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce(ball,ball.position,{x:80,y:-85}); } } 

