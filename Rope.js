        class Rope{

        constructor(x,y){

        var op = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX , y: this.offsetY}
        }

        this.rope = Matter.Constraint.create(op);
        World.add(world,this.rope);

        display()
            var point1 = this.rope.bodyA.position;
            var point2 = this.rope.bodyB.position;
        
            strokeWeight(2);

            varAnchor1X = point1.x;
            var Anchor1Y = point1.y;

            varAnchor2X = point2 .x + this.offsetX;
            var Anchor2Y = point2.y + this.offsetY;

            Line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);

            }

            }   