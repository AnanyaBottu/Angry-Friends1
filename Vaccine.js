class Vaccine extends BaseClass {
  constructor(x,y,angle){
    super(x,y,150,150,angle);
    this.image = loadImage("sprites/v.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
