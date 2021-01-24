
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roof, rope1, rope2, rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(150, 400, 50);
	bobObject2 = new Bob(200, 400, 50);
	bobObject3 = new Bob(250, 400, 50);
	bobObject4 = new Bob(300, 400, 50);
	bobObject5 = new Bob(350, 400, 50);

	roof = new Roof(250, 200, 350, 50);
	
	//make sure the line in the rope class reflects the soul of the rope.
	//if the offset here is -100, the line should be drawn that way as well
	rope1 = new String(bobObject1.body, roof.body, -100, 0); //, -1*(bobObject1.body.width),0);
	//the last two values here - offset x and offset y - tell the computer how far away the point is from the center of the body 
	rope2 = new String(bobObject2.body, roof.body, -50, 0);
	rope3 = new String(bobObject3.body, roof.body, 0, 0);
	rope4 = new String(bobObject4.body, roof.body, 50, 0);
	rope5 = new String(bobObject5.body, roof.body, 100, 0);

	//Matter.Body.applyForce(bobObject5.body, {x: 200, y: 320}, {x: 200, y: 300});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();
  drawSprites();
 
};
