var bg, bgImg;
var bottomGround;
var topGround;
var ballon, bolloonImg;

function preload(){
    bgImg = loadImage("assets/bg.png");

    balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
    createCanvas(1600,900);
    bg = createSprite(745,485,1,1);
    bg.addImage(bgImg);
    bg.scale = 1.5;

    bottomGround = createSprite(800,700,800,20);
    //bottomGround.visible = false;

    topGround = createSprite(800,100,800,20);

    balloon = createSprite(800,450,20,50);
    balloon.addAnimation("balloon",balloonImg);
    balloon.scale = 0.2;
}
 function draw(){
     background("black");
     
     if(keyDown("space")) {
        balloon.velocityY = -6 ;
        
      }

      
       balloon.velocityY = balloon.velocityY + 2;

    drawSprites();
 }