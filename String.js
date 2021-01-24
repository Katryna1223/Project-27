class String{
    constructor(BodyA, BodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: BodyA,
            bodyB: BodyB,
            stiffness: 0.06,
            length: 200,
            pointB: {x: this.offsetX, y: this.offfsetY}
        }
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }
    display(){
        var posA = this.string.bodyA.position;
        var posB = this.string.bodyB.position;
        strokeWeight(5);
        line(posA.x, posA.y, posB.x + this.offsetX, posB.y);
    }
}