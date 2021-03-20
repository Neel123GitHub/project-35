class Hero{
    constructor(x,y,width,height){
     this.body=Bodies.rectangle(x,y,width,height,{isStatic:false});
     this.width=width;
     this.height=height;
     this.image=loadImage("images/Superhero-02.png");
     World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        fill(124,202,242);
        stroke(124,202,242);
        ellipse(-10,-10,this.width,this.height);
    }
}