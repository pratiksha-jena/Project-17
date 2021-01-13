var survivalTime=0;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground,groundImage;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(50,150,20,50);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(300,350,600,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  obstacleGroup= new Group();
  FoodGroup = new Group();
  
  
  
}


function draw() {
background("white");

      
 stroke("white");
 textSize(20);
 fill("white");
 text("Score :" + score,500,50); 
 
 stroke("black"); 
 textSize(20);
 fill("black"); 
 survivalTime=Math.ceil(frameCount/frameRate());
 text("Survival Time: " + survivalTime,100,50); 
 
  if(gameState === PLAY){

    if(ground.x<400){
      ground.x=ground.width/2
    }

     if(keyDown("space")) {
      monkey.velocityY = -12;
    }

      monkey.velocityY = monkey.velocityY + 0.8;  
      

    food();  
    obstacles();
    
    if(obstacleGroup.isTouching(monkey)){
      gameState=END
    }
  }
    if(gameState===END){
      ground.velocityX=0;
      obstacleGroup.setVelocityXEach(0);
      FoodGroup.setVelocityXEach(0);
      obstacleGroup.setLifetimeEach(-1)
      FoodGroup.setLifetimeEach(-1)
      
    }
  monkey.collide(ground);
  
  drawSprites();
}
function obstacles(){
  if(frameCount % 300===0){
     obstacle = createSprite(600,290,20,50);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale=0.3;
    obstacle.velocityX = -6;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle)
  }  
}
function food(){
  if(frameCount % 80===0){
     banana = createSprite(600,50,20,50);
    banana.addImage("obstacle",bananaImage);
    banana.y = Math.round(random(50,100))
    banana.scale=0.1;
    banana.velocityX = -6;
    banana.lifetime = 134;
    FoodGroup.add(banana)
  }  
}






