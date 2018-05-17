/*
* attractors are essentially the planets, or entities that draw the particles in. Stored as an array.
* particles are instances of the Particle class that are pulled in to the attractor objects based on their Euclidean distance from the attractors and attractor mass (area of the circles).
*/
var attractors = [];
var particles = [];

function setup() {
    createCanvas(500, 500);
}

function mousePressed() {
    attractors.push(createVector(mouseX, mouseY));
}

function draw() {

}