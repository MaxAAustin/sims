/*
* attractors are essentially the planets, or entities that draw the particles in. Stored as an array.
* particles are instances of the Particle class that are pulled in to the attractor objects based on their Euclidean distance from the attractors and attractor mass (area of the circles).
*/
var attractors = [];
var particles = [];

/*
* Creates a 500 x 500px canvas with a light black
 * background and initial particles and attractors.
*/
function setup() {
    createCanvas(500, 500);
    for (var i = 0; i < 120; i++){
        particles.push(new Particle(random(width),random(height)));
        //particle = new Particle(200,100);
    }
    //Commenting out this loop produces interesting
    // fragmented pattern.
    /*for (var i = 0; i < 10; i++){
        attractors.push(createVector(random(width), random(height)));
    }*/
}
// Creates new attractor particles at the x and y
// coordinated obtained from user mouse clicks.
function mousePressed() {
    attractors.push(createVector(mouseX, mouseY));
}

function draw() {
    background(51);
    stroke(255);
    strokeWeight(4);

    for (var i = 0; i < attractors.length; i++){
        stroke(0,255,0);
        strokeWeight(50);
        point(attractors[i].x, attractors[i].y);
    }
    for (var i = 0; i < 50; i++){
        var particle = particles[i];
        for (var j=0; j< attractors.length; j++){
            particle.attracted(attractors[j]);
        }
        particle.update();
        particle.show();
    }
}