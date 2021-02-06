class Drop{
    constructor(x,y,radius,angle){
     var options = {
         restitution : 0.5 ,
         friction : 0.1
     }

     this.body = Bodies.circle(x,y,radius,options)
     this.radius = radius
     this.radius = 5
     
     World.add(world,this.body)

     if(this.rain.position.y > height){
      Matter.Body.setPosition(this.rain,{x:random (0,400), y:random (0,400)})
    }

    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(RADIUS);
      ellipse( 0, 0, this.radius);
      pop();
    }
}