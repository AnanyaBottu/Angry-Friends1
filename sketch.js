const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var corona1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   

    corona1 = new Corona(700,320,100,100);
    corona2 = new Corona(920,320,100,100);
    corona3 = new Corona(700,240,100,100);
    corona4 = new Corona(920,240,100,100);
    corona5 = new Corona(810,160,100,100);

    sani1 = new Sani(810, 350);
    sani2 = new Sani(810, 220);

    log1 = new Log(810,250,300, PI/2);
    log3 =  new Log(810,170,300, PI/2);
    log4 = new Log(760,110,150, PI/4);
    log5 = new Log(850,110,150, -PI/7);

    vaccine = new Vaccine(120,120,PI);
    

    
   
    

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(vaccine.body,{x:210, y:50});
    fill("green");
    platform = new Ground(150, 305, 300, 170);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    
    corona1.display();
    corona2.display();
    corona3.display();
    corona4.display();
    corona5.display();
    
    ground.display();

    sani1.display();
    sani2.display();


    log1.display();
    log3.display();
    log4.display();
    log5.display();

    
    vaccine.display();

    platform.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(vaccine.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}




