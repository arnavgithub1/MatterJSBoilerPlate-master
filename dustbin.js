class dustbin{
    constructor(x,y,width,height){
        var options={
            isstatic:true,
            friction:0.3,
            density:1.0
        }
         this.body=Bodies.rectangle(x,y,width,height,options);
         this.width=width;
         this.height=height;

         world.add(world,this.body);
    
    }
    
     display(){
     var pos =this.body.position;
     var angle=this.body.angle;
     push();
     strokeweight(4);
     stroke("white");
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     fill(255);
     rect(0,0,this.width,this.height);
     pop();
     }
};
    








    
        
    
        
        
    
