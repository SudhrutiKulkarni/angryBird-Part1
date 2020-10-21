const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var ground;
var pig1,pig2;
var log1;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,350,50,50);
    box2 = new Box(900,350,50,50);
    
    ground = new Ground(600,390,1200,20);
    pig1=new Pig(800,250);
    pig2=new Pig(800,220);
    log1=new Log(800,220,250,PI/2);
    log2=new Log(800,150,250,PI/2);
    log3=new Log(750,120,200,PI/7);
    log4=new Log(850,120,200,-PI/7);
    bird=new Bird(200,200);
    box3 = new Box(700,170,50,50);
    box4 = new Box(900,170,50,50);
    box5 = new Box(800,130,50,50);
    
}
function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
        ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    box3.display();
    box4.display(); 
    box5.display(); 
    bird.display();
   
}