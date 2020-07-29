const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var dustbin1;
var ball1;

var options={
isstatic:false,
restituion:0.3,
friction:0.5,
density:1.2,

}
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine=Engine.create();
	world=engine.world;


	engine = Engine.create();
	world = engine.world;

	dustbin1=new dustbin(700,320,70,70);
	dustbin2=new dustbin(920,320,70,70);
     

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(dustbin2.body.position.x);
  console.log(dustbin2.body.position.y);
  console.log(dustbin2.body.angle);
  dustbin1.display();
  dustbin2.display();
  

  drawSprites();



}

	