var dog,sadDog,happyDog;
var feedfood,addfood;
var database;
var foodObj;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food")
  addFood.position(800,95);
  addFood.mousePressed(addFoods);


}

function draw() {
  background(46,139,87);

  fill(255,255,254);
  textSize(15);

  if(lastFed>=12){
    text("Last Fed :"+ lastFed%12 + "PM",350,30)
  }else if(lastFed==0){
    text("Last Fed : 12 AM",350,30)
  }else{
    text("Last Fed :"+ lastFed +"AM",350,30)
  }
  drawSprites(); 
  }

function feedDog() {
  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<= 0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0)
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }
 }

 function addFoods(){
   foodS++;
   database.ref('/').update({
     Food:foodS
   })
 }