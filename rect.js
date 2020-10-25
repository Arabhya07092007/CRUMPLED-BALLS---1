class Log {

    constructor(x,y,width,height){
    
    var options  = {
    
          isStatic:true
    
    }
    
    this.x=x;
    this.y=y;
    this.w = width;
    this.h = height;
    this.angle = 0;

    this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
    Matter.Body.setAngle(this.body,this.angle);
    World.add(world,this.body);
    
    }
         
    display(){
    
    var pos = this.body.position;

    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill("green");
    rotate(this.angle);
    rect(0/*pos.x,pos.y*/,0,this.w, this.h);
    pop();

    }
    }