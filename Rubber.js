class Rubber {
    constructor(x, y,width,hieght, angle) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, hieght, options);
      this.height=hieght;
      this.width=width;
    //  this.image=loadImage()
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
 //     image(this.image,0,0,this.width,this.height)
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  