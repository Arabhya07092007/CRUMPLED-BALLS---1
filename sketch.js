
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper_ball ;
var bar1,bar2,bar3;
var ground;


function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
  world = engine.world;


  paper_ball = new Ball(400,350,50);
  ground = new Log(650,690,1300,20,);
  bar1 = new Log(1000,660,200,20);
  bar2 = new Log(910,590,20,160);
  bar3  =  new Log(1110,590,20,160);

  var render = Render.create({

    element:document.body,
    engine:engine,
    options:{
      width:1200,
      height:700,
      wireframe:false

    }
  });

  keyPressed();

  Render.run(render);
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  ground.display();
  paper_ball.display();

  bar1.display();
  bar2.display();
  bar3.display();

}

function keyPressed() {
  if (keyCode == UP_ARROW) {

   Matter.Body.applyForce(paper_ball.body,paper_ball.body.position,{x:320,y:-205});
     
   }
 }