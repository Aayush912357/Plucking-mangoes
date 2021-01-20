class Mango {
    constructor(x,y,r){
        var options={
            isStatic:true

        }
        this.x = x;
        this.y = y;
        this.r = r;
        //this.height = height;
        //this.width = width;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        this.image = loadImage("Plucking mangoes/mango.png")
        World.add(world,this.body);
    }
    display(){
     imageMode(CENTER)
     image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
    }
        
    
}

