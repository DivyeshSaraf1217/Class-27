class chain
{
constructor(bodyA,bodyB)
{
var options={
    bodyA:bodyA,bodyB:bodyB ,stiffness:0.04, lenght:10
}
this.body=Matter.Constraint.create(options);
World.add(world,this.body);
}
display(){
    var pointA=this.body.bodyA.position;
    var pointB=this.body.bodyB.position;
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}

}