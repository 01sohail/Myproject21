var rectangle1,rectangle2,rectangle3,rectangle4;
var ball;
var edges;

var canvas;
var music;

function preload(){
 music = loadSound("music.mp3");


}


function setup(){
canvas = createCanvas(700,400);

ball = createSprite(350,200,50,50)
ball.shapeColor = "green"
ball.velocityX = 3;
ball.velocityY = 8;

rectangle1 = createSprite(80, 387, 150, 23);
rectangle1.shapeColor = "red";

rectangle2 = createSprite(260, 387, 150, 23);
rectangle2.shapeColor = "yellow";


rectangle3 = createSprite(440,387,150,23);
rectangle3.shapeColor = "pink";

rectangle4 = createSprite(620,387,150,23);
rectangle4.shapeColor = "lightBlue";



    

}

function draw() {
background(rgb(169,169,169));
 
    
//created edge sprite
edges = createEdgeSprites();

ball.bounceOff(edges);

if(ball.isTouching(rectangle1)){
ball.shapeColor = "red"

}

if(ball.isTouching(rectangle2)){
ball.shapeColor = "yellow"
}

 if(ball.isTouching(rectangle3)){
 ball.shapeColor = "pink"
 }

 if(ball.isTouching(rectangle4)){
 ball.shapeColor = "lightBlue"
 }

 if(ball.isTouching(rectangle1)){
 music.play()    
 ball.velocityX = 0;
 ball.velocityY = 0;

 }
            




drawSprites();

}
