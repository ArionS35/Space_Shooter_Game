class Boxa{
    constructor(x, y, width, height,angle) {
      var options = {
          isStatic:false,
          'restitution':0.001,
          'friction':100000,
          'density':100,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/alien_block5.png");
      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(score<1095) {
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(2);
      stroke("black");
      fill("red");
      image(this.image,0, 0, this.width, this.height);
      pop();
      }else{
        World.remove(world,this.body)
      }
    }
  }
