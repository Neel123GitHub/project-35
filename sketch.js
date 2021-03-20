const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backGroundImg,hero
function preload() {
//preload the images here
backGroundImg=loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  
  engine = Engine.create();
  world = engine.world; 
  hero=new Hero(300,250,175,175);
  rope=new Fly(hero.body,{x:300,y:50});
  ground=new Ground(150,410,850,10);
  Engine.run(engine);
}

function draw() {
  background(backGroundImg);
  hero.display();
  rope.display();
  ground.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}