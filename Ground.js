class Ground{
    constructor(x,y,width,height){
        var properties={isStatic:true};
        this.body=Bodies.rectangle(x,y,width,height,properties);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    } 
    display(){
        var pos=this.body.position;
        fill(0);
        stroke(0);
        rect(pos.x,pos.y,this.width,this.height);
    }
}