class Striker{
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':100000,
          'density':5000,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/striker2.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(2);
      stroke("black");
      fill("red");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  }