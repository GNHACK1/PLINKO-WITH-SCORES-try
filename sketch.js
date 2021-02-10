var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;
var score = 0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  ground1 = new Ground(810,height/2,20,height)
  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");

  textSize(35)
  text("Score : "+score,20,40);

  fill("white");
  textSize(35)
  text(" 100 ", 5, 550);
  text(" 300 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 100 ", 240, 550);
  text(" 200 ", 320, 550);
  text(" 200 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 500 ", 560, 550);
  text(" 100 ", 640, 550);
  text(" 300 ", 720, 550);
  Engine.update(engine);
  ground.display();
  
  if ( count>= 11) {
    gameState ="end";
    textSize(100);
    text("GameOver", 150, 250);
  }

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
  for (var i = 0; i < particles.length; i++) {
     particles[i].display();
    
     //100
     if (particles[i].body.position.x < 80 && particles[i].body.position.y>760) {
      score=score+100;
      particles.pop();
     }
     else if (particles[i].body.position.x < 240 &&particles[i].body.position.x > 320 && particles[i].body.position.y>760) {
      score = score + 100;
      particles.pop();
    }
    else if (particles[i].body.position.x < 480 &&particles[i].body.position.x > 560 && particles[i].body.position.y>760) {
      score = score + 100;
      particles.pop();
    }
    else if (particles[i].body.position.x < 640 &&particles[i].body.position.x > 720 && particles[i].body.position.y>760) {
      score = score + 100;
      particles.pop();
    }
    //100

    else if (particles[i].body.position.x < 160 && particles[i].body.position.x > 240 && particles[i].body.position.y > 760||particles[i].body.position.x < 560 && particles[i].body.position.x > 640 && particles[i].body.position.y > 760) {
      score = score + 500;
      particles.pop();
    }
    else if (particles[i].body.position.x < 320 && particles[i].body.position.x > 480 && particles[i].body.position.y > 760) {
      score = score + 200;
      particles.pop();
    }
    else if (particles[i].body.position.x < 80 && particles[i].body.position.x > 160 && particles[i].body.position.y > 760||particles[i].body.position.x < 720 && particles[i].body.position.x > 800 && particles[i].body.position.y > 760) {
      score = score + 300;
      particles.pop();
    }
   }

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
 
}
function mousePressed(){
  if(gameState!=="end"){
      count++;
     particles.push(new Particle(mouseX, 10, 10, 10)); 
  }   
}