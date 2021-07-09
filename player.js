class Player{

    constructor(a,b){

        var options={
            bodyA:a,
            pointB:b,
            stiffness:0.04,
            length:1,
            isStatic:false
        }
        this.sling= loadImage("images/jet1.png")
        
        this.sling= Constraint.create(options)
        World.add(world,this.sling)

        this.pointB=b
    
    }

    display(){
      if(this.sling.bodyA){
      push ()
      strokeWeight(3)
      stroke("red")
      line(this.sling.bodyA.position.x, this.sling.bodyA.position.y,
           this.sling.pointB.x,this.sling.pointB.y);
      pop ()
        }
    }

    fly(){
        this.sling.bodyA=null;
    }

    attach(body){
        if(keyCode === 32){
        this.sling.bodyA=body;
        }
    }
}
