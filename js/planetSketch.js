/*
* Author: Michael Austin
* Date: 06/15/2018
* External Libs: p5.js and WebGL from MDN
*Sets up planet canvas and draws 3D planet model with other attributes like background, color, etc.
*/

let img;

function preload() {
    img = loadImage('textures/Earth.png');
}
function setup() {
    createCanvas(500, 500, WEBGL);
}
function draw() {
    background(175);

    texture(img);
    plane(100,100);
}