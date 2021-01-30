var cat,catImg
var mouse,mouseImg1, mouseImg2, mouseImg3;
var background,backgroundImg

function preload() {
    //load the images here
    catImg = loadAnimation("images/tomOne.png")

    catImg2 = loadAnimation("images/tomTwo.png", "images/tomThree.png" )

    catImg3 = loadAnimation("images/tomFour.png")
    
    mouseImg1 = loadAnimation("images/jerryOne.png")

    mouseImg2 = loadAnimation("jerry/tomTwo.png", "images/jerryThree.png")

    mouseImg3 = loadAnimation("images/jerryFour.png")

    backgroundImg = loadImage("images/garden.png")


}


function setup(){
   createCanvas(600,600);
    //create tom and jerry sprites here
    //background = createSprite(300,300,600,600)
    // background.addImage(backgroundImg)
    
    cat= createSprite(500,500,30,30)
    cat.addAnimation("catSleeping", catImg)

    mouse = createSprite(300,300,15,15)
    mouse.addAnnimation("mouseEating",mouseImg1)

}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
    // if(cat,x -mouse.x <(cat.width - mouse.width)/2){
    //     cat.velocityX = 0  
    //     cat.addAnimation("catImg2", catImg3)
    //     cat.changeAnimation("catImg2");
    
   // }


    drawSprites();
}


// function keyPressed(){

//   //For moving and changing animation write code here
//   if(keyCode === LEFT_ARROW){
//       cat.velocityX = -5;
//       cat.addAnimation("catRunning", catImg2)
//       cat.changeAnimation("catRunning")
//       Text(mouseX + ',' + mouseY, 10,)
//   }

// }
