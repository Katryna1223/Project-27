class Bob{
    constructor(x, y, radius){
        var options = {
            isStatic: true,
        }
    this.body = Bodies.circle(x, y, radius, options);
    this.x = x;
    this.y = y;
    this.radius = radius;
    //this.image = loadImage("paper.png");
    World.add(world, this.body);
}
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(255,0,255);
        noStroke();
        circle(0, 0, this.radius);
        pop();
       

    }
}