class Food {
    constructor( 
        FoodStock,
        ){}
  
  display(){
   var x=50,y=100
  
   imageMode(CENTRE);
   image(this.image,720,220,70,70);

   if(this.foodStock!=0){
       for(var i=10;i<this.foodStock;i++){
          if(i%10==0) {
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50)
          x=x+30
       }
   }

  }      
}