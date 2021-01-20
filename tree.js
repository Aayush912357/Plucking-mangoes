class Tree {
    constructor(x,y,width,height){
        var options={
            isStatic:true

        }
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        this.image = loadImage("Plucking mangoes/tree.png")
        World.add(world,this.image);
    }
    display(){
     imageMode(CENTER)
     image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
        
    
}

