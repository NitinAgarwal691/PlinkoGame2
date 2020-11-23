const Engine = Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var ground,engine,world;
var divisions=[];
var divisionHeight=300;
// var position = [50,50,80,100];
//divisions.push(position);
//var divisionHeight=300;
//division1,division2,division3,division4,division5,division6,division7
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
	world = engine.world;
  ground=new Ground(240,793,480,14);
  // division1=new Division(5,600,9,400);
  // division2=new Division(91,600,9,400);
  // division3=new Division(168,600,9,400);
  // division4=new Division(245,600,9,400);
  // division5=new Division(322,600,9,400);
  // division6=new Division(399,600,9,400);
  // division7=new Division(476,600,9,400);
//   var position = [this.body.position.x, this.body.position.y];
//  divisions.push(position);
  
}

function draw() {
  background("black");
  for(var k=0; k<=width; k=k+80){
    divisions.push(new Division(k, height-divisionHeight/2,divisionHeight));
   }
  // division1.display();  
  // division2.display();  
  // division3.display();  
  // division4.display();  
  // division5.display();  
  // division6.display();  
  // division7.display();
  
  ground.display();
}