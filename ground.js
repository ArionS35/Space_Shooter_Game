class Base{
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      //translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      stroke("black");
      fill("rgb(90,100,150)");
      rect(this.body.position.x,this.body.position.y,this.width, this.height);
      pop();
    }
  }
