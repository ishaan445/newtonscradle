class rope{
    constructor(body1,body2, offset, offsety)
    {
        this.offsetX=this.offsetX
        this.offsetY=this.offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
            
        }
        //console.log(options);
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }

    display()
    {
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyA.position;

        strokeWeight(2);

        var Anchor1X=pointA.x
        var Anchor1X=pointA.y

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.y+this.offsetY

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}