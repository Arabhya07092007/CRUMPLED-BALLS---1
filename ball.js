class Ball {


    constructor(x,y,r){
    
    var options ={
    
        restitution:0.8,
        isStatic:false,
        friction:0.3,
        density:1.2
       
    
    }
    
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;
    World.add(world,this.body);
    
    }
    
    display(){
    
    var pos  = this.body.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill("red");
    ellipse(0,0,this.r,this.r);
    pop();

    }
    
    }