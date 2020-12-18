
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}



var ground;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680,800,10)

	//Create the Bodies Here.
	b1=new Basket(600,670,200,10)
	b2=new Basket(500,620,10,100)
	b3=new Basket(700,620,10,100)


	paper = new Paper(100,100,10)
	Engine.run(engine);
	

}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  b1.display();
  b2.display();
  b3.display();

  paper.display()
  drawSprites();
 
}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 15, y :-15})
	}
}