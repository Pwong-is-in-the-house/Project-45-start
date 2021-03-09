const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var player,playerImg;
var alien,alien2,alien3,alienImg,alien2Img,alien3Img;
var astroid,astroidImg; 
function preload()
{
	playerImg=loadImage("41845911-a-cartoon-child-astronaught-with-a-ray-gun.jpg");
alienImg=loadImage("images(1).jpeg");
alien2Img=loadImage("images.jpeg");
alien3Img=loadImage("spaceship-clipart-6.jpg");	
astroidImg=loadImage("download.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



