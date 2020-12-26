
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var leftwall, rightwall, centerwall;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var paper_options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	paper = Bodies.circle(200,100,20,paper_options);
	paper.shapeColor = "green";
	World.add(world,paper);

	leftwall=createSprite(500,623,20,70);
	centerwall=createSprite(600,650,200,20);
	rightwall=createSprite(700,623,20,70);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipseMode(RADIUS);
  ellipse(paper.position.x,paper.position.y,20,20);
  
  drawSprites();
 
}



