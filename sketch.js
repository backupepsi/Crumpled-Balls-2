const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, paper;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  var options ={
    isStatic:true
  }
  
  paper = new Paper(400,600,70) 
  ground1 = Bodies.rectangle(400,685,800,10, options);
 /* dustbinbot = new Dustbin(700,673,170,17)
  dustbinleft = new Dustbin(623.5,639, 17,85)
  dustbinright = new Dustbin(774.5,639, 17,85)*/
  dustbin = new Dustbin(699,639, 151, 85)
  fill("red");
  World.add(world,ground1)
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("white");
  var pos = ground1.position
  rect(pos.x,pos.y, 800,10);
  drawSprites();
  paper.display();
 /* dustbinbot.display();
  dustbinleft.display();
  dustbinright.display();*/
  dustbin.display();
  //keyPressed();
 
}

function keyPressed(){
    if (keyCode ===UP_ARROW){
       Matter.Body.applyForce(paper.body, paper.body.position,{x:10,y:-10});
	}

}
