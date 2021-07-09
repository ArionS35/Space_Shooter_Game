class Enemy{
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          'restitution':0.001,
          'friction':100000,
          'density':50,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/enemy1.png");
      this.gameState="pigpresent";
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed<6.6) {
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
      else
      if( this.gameState==="pigpresent"){
        World.remove(world,this.body)
        score+=100; 
        this.gameState="pigabsent" 
     }
    }
  }
