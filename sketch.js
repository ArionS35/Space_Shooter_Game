const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score=0;
var gameState = "onSling";
var particle = [];

function preload() {
//preload the images here
 medalimg= loadImage("images/medal1.png")
 towerimg= loadImage("images/tower1.png")
 bg= loadImage("images/bg4.png")
}

function setup() {
  createCanvas(1360, 620);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)
  // create sprites here
  base1= new Base(700,610,2000,20)
  base2= new Base(100,625,250,100)
  
  medal = Bodies.circle(310,70,20,{isStatic:true})
 //World.add(world,medal)

  striker = new Striker(150,505,40,40)
  tower = Bodies.circle(175,395,20,{isStatic:true})
  player = new Player(striker.body,{x:200, y:400},40,140)

  enemyking = new Enemy(1300,5,40,100)
  enemy1 = new Enemy5(1300,225,40,60)
  enemy2 = new Enemy5(1300,325,40,60)

  platform1= new Base(1100,100,1,1)
  platform2= new Base(960,150,1,1)
  platform3= new Base(600,150,1,1)
  platform4= new Base(500,210,1,1)
  platform5= new Base(800,60,1,1)
  platform6= new Base(300,60,1,1)

  b1 = new Cage(1350,15,35,35)
  b2 = new Cage(1350,50,35,35)
  b3 = new Cage(1350,85,35,35)
  b4 = new Cage(1350,120,35,35)
  b5 = new Cage(1350,155,35,35)
  b6 = new Cage(1315,155,35,35)
  b7 = new Cage(1280,155,35,35)
  b8 = new Cage(1245,150,35,35)
  b9 = new Cage(1210,50,35,35)
  b10 = new Cage(1315,15,35,35)
  b11 = new Cage(1280,15,35,35)
  b12 = new Cage(1245,15,35,35)
  b13 = new Cage(1210,15,35,35)
  b14 = new Cage(1350,190,35,35)
  b15 = new Cage(1350,225,35,35)
  b16 = new Cage(1350,260,35,35)
  b17 = new Cage(1315,260,35,35)
  b18 = new Cage(1280,260,35,35)
  b19 = new Cage(1245,260,35,35)
  b20 = new Cage(1245,365,35,35)
  b21 = new Cage(1350,330,35,35)
  b22 = new Cage(1350,295,35,35)
  b23 = new Cage(1350,365,35,35)
  b24 = new Cage(1315,365,35,35)
  b25 = new Cage(1280,365,35,35)
  b26 = new Cage(1350,407,50,50)
  b27 = new Cage(1350,449,50,50)
  b28 = new Cage(1350,491,50,35)
  b29 = new Cage(1350,533,50,50)
  b30 = new Cage(1350,575,50,50)

  block1= new Box(475,580,50,80,PI/100)
  block2= new Box(625,580,50,80,PI/100)
  blocka1= new Boxa(550,550,200,10,PI/100)
  block3= new Box(975,580,50,80,PI/100)
  block4= new Box(1125,580,50,80,PI/100)
  blocka2= new Boxa(1050,550,200,10,PI/100)

  block5= new Box(485,530,40,70,PI/100)
  block6= new Box(615,530,40,70,PI/100)
  blocka3= new Boxa(550,450,170,10,PI/100)
  block7= new Box(985,530,40,70,PI/100)
  block8= new Box(1115,530,40,70,PI/100)
  blocka4= new Boxa(1050,450,170,10,PI/100)

  block9= new Box(506,380,30,60,PI/100)
  block10= new Box(590,380,30,60,PI/100)
  blocka5= new Boxa(550,350,140,10,PI/100)
  block11= new Box(1000,380,30,60,PI/100)
  block12= new Box(1100,380,30,60,PI/100)
  blocka6= new Boxa(1050,350,140,10,PI/100)
  block13= new Box(655,580,50,90,PI/100)
  block14= new Box(945,580,50,90,PI/100)
  block15= new Box(665,490,50,90,PI/100)
  block16= new Box(935,490,50,90,PI/100)
  blocka7= new Boxa(510,340,10,60,PI/17)
  blocka8= new Boxa(560,340,10,60,PI/-17)
  blocka9= new Boxa(1010,340,10,60,PI/17)
  blocka10= new Boxa(1066,340,10,60,PI/-19)
  blocka11= new Boxa(800,200,280,30,PI/100)
  blocka12= new Boxa(800,320,330,30,PI/100)
  block17= new Box(700,200,50,50,PI/100)
  block18= new Box(900,300,50,50,PI/100)
  block19= new Box(700,250,50,50,PI/100)
  block20= new Box(900,250,50,50,PI/100)
  blocka13= new Boxa(840,140,10,120,PI/-19)
  blocka14= new Boxa(770,140,10,120,PI/19)

  e1= new Enemy1(550,550,30,60)
  e2= new Enemy1(550,455,30,60)
  e3= new Enemy1(550,370,30,50)
  e4= new Enemy1(1050,550,30,60)
  e5= new Enemy1(1050,455,30,60)
  e6= new Enemy1(1050,370,30,50)
  e7= new Enemy2(750,550,50,60)
  e8= new Enemy2(850,555,50,60)
  e9= new Enemy2(800,550,50,60)
  e10= new Enemy2(750,500,40,50)
  e11= new Enemy2(850,505,40,50)
  e12= new Enemy2(800,500,40,50)
  e13= new Enemy2(750,465,30,40)
  e14= new Enemy2(850,455,30,40)
  e15= new Enemy2(800,465,30,40)
  e16= new Enemy3(750,310,40,40)
  e17= new Enemy3(800,310,40,40)
  e18= new Enemy3(750,310,40,40)
  e19= new Enemy3(800,310,40,40)
  e20= new Enemy3(850,310,40,40)
  e21= new Enemy3(850,310,40,40)
  e22= new Enemy6(1100,60,40,40)
  e23= new Enemy6(960,130,40,40)
  e24= new Enemy6(600,100,40,40)
  e25= new Enemy6(500,200,40,40)
  e26= new Enemy6(800,50,40,40)
  e27= new Enemy6(300,50,40,40)
  e28= new Enemy7(1150,550,60,150)
  e29= new Enemy7(1200,550,60,150)
  e30= new Enemy7(1250,550,60,150)

}

function draw() {
  background(bg);
  Engine.update(engine);

  console.log(mouseX,mouseY)
  
  fill ("white")
  textSize(40)
  text("Score : " + score , 100,100)
  textSize(20)
  text("Target - 1100" , 100,130)

  
  image(towerimg,tower.position.x,tower.position.y,50,180)

  base2.display()
  player.display()
  striker.display()

  enemyking.display()
  enemy1.display()
  enemy2.display()

  if(score===1100){
    fill ("white")
    textSize(100)
    textFont("Georgian")
    text("YOU  WIN", 550, 200)
    // imageMode(CENTER)
     image(medalimg,medal.position.x,medal.position.y,30,70)
     if(frameCount%10===0){
       particle.push(new Particle())
       }
     
       for(i=0;i<particle.length;i++){
       particle[i].display()
       }
  }

  platform1.display()
  platform2.display()
  platform3.display()
  platform4.display()
  platform5.display()

  e1.display()
  e2.display()
  e3.display()
  e4.display()
  e5.display()
  e6.display()
  e7.display()
  e8.display()
  e9.display()
  e10.display()
  e11.display()
  e12.display()
  e13.display()
  e14.display()
  e15.display()
  e16.display()
  e17.display()
  e18.display()
  e19.display()
  e20.display()
  e21.display()
  e22.display()
  e23.display()
  e24.display()
  e25.display()
  e26.display()
  e27.display()
  e28.display()
  e29.display()
  e30.display()

  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  b8.display()
  b9.display()
  b10.display()
  b11.display()
  b12.display()
  b13.display()
  b14.display()
  b15.display()
  b16.display()
  b17.display()
  b18.display()
  b19.display()
  b20.display()
  b21.display()
  b22.display()
  b23.display()
  b24.display()
  b25.display()
  b26.display()
  b27.display()
  b28.display()
  b29.display()
  b30.display()

  block1.display()
  block2.display()
  blocka1.display()
  block3.display()
  block4.display()
  blocka2.display()
  block5.display()
  block6.display()
  blocka3.display()
  block7.display()
  block8.display()
  blocka4.display()
  block9.display()
  block10.display()
  blocka5.display()
  block11.display()
  block12.display()
  blocka6.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  blocka7.display()
  blocka8.display()
  blocka9.display()
  blocka10.display()
  blocka11.display()
  blocka12.display()
  blocka13.display()
  blocka14.display()
  

  textSize(16)
  text("Press Space to attach", 60,600)
}

function keyPressed(){
  if(keyCode===LEFT_ARROW){
    Matter.Body.applyForce(striker.body,striker.body.position,{x:-900,y:0});
  }
  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(striker.body,striker.body.position,{x:900,y:100});
  }
}

function mouseDragged(){
  Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
 player.fly()
}

function keyPressed(){
 player.attach(striker.body)  
 Matter.Body.setPosition(striker.body,{x:100,y:450});
 player.attach(striker.body);
}