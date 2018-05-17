/*
* Defines the Particle object used in the sketch.js
 * draw() functions.
 * pos is the position of the Particle instance taking
  * an x and y and expressed as a vector. (Assumes 2D
   * space.)
 * velocity is change in position over time (frames per
 * second.)
 * acceleration is the change in velocity over time.
 * Universal gravitational constant = 6.67408
 *
*/
function Particle(x,y) {

    this.pos = createVector(x,y);
    this.prev = createVector();
    this.velocity = p5.Vector.random2D();
    //this.velocity.setMag(random(2,5));
    this.acceleration = createVector();

    this.update = function () {
        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.pos.add(this.velocity);
        this.acceleration.mult(0);
    }

    this.show = function () {
        stroke(255, 255);
        strokeWeight(1);
        line(this.pos.x,this.pos.y, this.prev.x, this.prev.y);

        this.prev.x = this.pos.x;
        this.prev.y = this.pos.y;
    }

    this.attracted = function (target) {

        var force = p5.Vector.sub(target, this.pos);
        var distSquared = force.magSq();
        var repel = force.mag();
        if (repel < 20){
            force.mult(-1);
        }
        distSquared = constrain(distSquared, 1, 200);
        var G = 6.67408;
        var magnitude = G / distSquared;
        force.setMag(magnitude);
        this.acceleration.add(force);
    }
}