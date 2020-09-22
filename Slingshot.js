class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png")
        //this.image3 = loadImage("sprites/sling3.png")

    }

    join(birdy){
        this.sling.bodyA = birdy;
    }
   
   
   
   
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
          //  image(this.image3,pointA.x-35,pointA.y-15,17,35);
           push();
            strokeWeight(10);

          stroke("#54270f");
          
             line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
             
             line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
             pop();
             /*if(pointA.x>220){
                image(this.image3,pointA.x+25,pointA.y-10,17,35) 
             }
             else{
                image(this.image3,pointA.x-30,pointA.y-10,17,35)
             }*/
        }
     image(this.image1,220,20);
     image(this.image2,190,20);
     
  
  
    }
    
}