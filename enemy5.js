class Enemy5{
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
      this.image=loadImage("images/enemy5.png");
      this.gameState="pigpresent";
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed<8.4) {
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
        score+=50;  
        this.gameState="pigabsent"
     }
    }
  }
