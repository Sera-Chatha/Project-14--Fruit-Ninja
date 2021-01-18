//Game States
var Play = 1;
var End = 0;
var gameState = Play;

//create Sprite Variables
var sword, swordImage, swordSound;
var fruitsGroup, fruit1_Image, fruit1, fruit2_Image, fruit2, fruit3_Image, fruit3, fruit4_Image, fruit4;
var enemyGroup, enemyImage;
var gameOverImage, gameOverSound;

//set score variable
var score = 0;

function preload() {
  swordImage = loadImage("sword.png");
  fruit1_Image= loadImage("fruit1.png");
  fruit2_Image = loadImage("fruit2.png");
  fruit3_Image = loadImage("fruit3.png");
  fruit4_Image = loadImage("fruit4.png");
  enemyImage = loadImage("alien1.png", "alien2.png");
  gameOverImage = loadImage("gameover.png");
  gameOverSound=loadSound("gameover.mp3");
  swordSound=loadSound("knifeSwooshSound.mp3");
}

function setup() {
  createCanvas(400, 400);

  //creating Sword
  sword = createSprite(40, 200, 20, 20);
  sword.addImage(swordImage);
  sword.scale = 0.7;

  fruitsGroup = createGroup();
  enemyGroup = createGroup();
  orangeFruit = createGroup();
  appleFruit =createGroup();
  pearFruit =createGroup();
  bananaFruit =createGroup();
}


function draw() {
  background("lightBlue");

  text("Score: " + score, 320, 20);


  if (gameState === Play) {
    
    if (World.frameCount % 80 === 0) {
    r = Math.round(random(1, 4));
    if (r == 1) {
      Orange();
    } else if (r == 2) {
      Apple();
    } else if (r == 3) {
      Pear();
    } else {
      Banana();
    }}
    
    
      
    //Call fruits and enemy function
    Enemy();

    sword.y = World.mouseY;
    sword.x = World.mouseX;

    if (orangeFruit.isTouching(sword)) {
      swordSound.play();
      orangeFruit.destroyEach();
      score = score + 3;
    }
      
    if (appleFruit.isTouching(sword)) {
      swordSound.play();
      appleFruit.destroyEach();
      score = score + 5;
    }
      
     if (pearFruit.isTouching(sword)) {
      swordSound.play();
      pearFruit.destroyEach();
      score = score + 1;
    }
      
    if (bananaFruit.isTouching(sword)) {
      swordSound.play();
      bananaFruit.destroyEach();
      score = score + 7;
    }
      
    if (enemyGroup.isTouching(sword)) {
      gameOverSound.play();
      gameState = End;
    }
  }

  if (gameState === End) {

    orangeFruit.destroyEach();
    appleFruit.destroyEach();
    pearFruit.destroyEach();
    bananaFruit.destroyEach();
    enemyGroup.destroyEach();
    
    orangeFruit.setVelocityXEach(0);
    appleFruit.setVelocityXEach(0);
    pearFruit.setVelocityXEach(0);
    bananaFruit.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);

    sword.addImage(gameOverImage);
    sword.x = 200;
    sword.y = 200;
    
    if(mousePressedOver(sword)) {
      gameState=Play;
      score = 0;
      sword.addImage(swordImage);
    }
  }

  drawSprites();
  }

function Orange(){
  fruit1 = createSprite(400, 200, 20, 20);
  fruit1.scale = 0.2;
  fruit1.addImage(fruit1_Image);
  fruit1.y = Math.round(random(20, 370));
  fruit1.velocityX = -(10+score/20);
  fruit1.setLifetime = 40;
  position1 = Math.round(random(1,2))
  if (position1==1){
    fruit1.x=400;
    fruit1.velocityX = -(10+score/20);
  } else {
    fruit1.x=0;
    fruit1.velocityX = (10+score/20);
  }
  orangeFruit.add(fruit1);
}

function Apple(){
  fruit2 = createSprite(400, 200, 20, 20);
  fruit2.scale = 0.2;
  fruit2.addImage(fruit2_Image);
  fruit2.y = Math.round(random(50, 340));
  fruit2.velocityX = -(7+score/20);
  fruit2.setLifetime = 400/7;
  position2 = Math.round(random(1,2))
  if (position2==1){
    fruit2.x=400;
    fruit2.velocityX = -(7+score/20);
  } else {
    fruit2.x=0;
    fruit2.velocityX = (7+score/20);
  }
  appleFruit.add(fruit2);
}

function Pear(){
  fruit3 = createSprite(400, 200, 20, 20);
  fruit3.scale = 0.2;
  fruit3.addImage(fruit3_Image);
  fruit3.y = Math.round(random(30, 400));
  fruit3.velocityX = -(2+score/20);
  fruit3.setLifetime = 200;
  position3 = Math.round(random(1,2))
  if (position3==1){
    fruit3.x=400;
    fruit3.velocityX = -(2+score/20);
  } else {
    fruit3.x=0;
    fruit3.velocityX = (2+score/20);
  }
  pearFruit.add(fruit3);
}

function Banana(){
  fruit4 = createSprite(400, 200, 20, 20);
  fruit4.scale = 0.2;
  fruit4.addImage(fruit4_Image);
  fruit4.y = Math.round(random(100, 380));
  fruit4.velocityX = -(5+score/20);
  fruit4.setLifetime = 80;
  position4 = Math.round(random(1,2))
  if (position4==1){
    fruit4.x=400;
    fruit4.velocityX = -(5+score/20);
  } else {
    fruit4.x=0;
    fruit4.velocityX = (5+score/20);
  }
  bananaFruit.add(fruit4);
}

function Enemy() {
  if (World.frameCount % 200 === 0) {
    monster = createSprite(400, 200, 20, 20);
    monster.addImage("moving", enemyImage);
    monster.y = Math.round(random(100, 300));
    monster.velocityX = -(8+score/20);
    monster.setLifetime = 50;
    position5 = Math.round(random(1,2))
  if (position5==1){
    monster.x=400;
    monster.velocityX = -(8+score/20);
  } else {
    monster.x=0;
    monster.velocityX = (8+score/20);
  }
    enemyGroup.add(monster);
  }}