const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,rubber, stone
function preload()
{
	
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    hammer = new Hammer(200,300,400,200);
    stone = new Stone(700,320,70,70);
    rubber = new Rubber(920,320,70,70);
   
}

function draw(){
    background(0);
    Engine.update(engine);
    hammer.display();
    stone.display();
    rubber.display();
  
}