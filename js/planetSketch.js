/*
* Author: Michael Austin
* Date: 06/15/2018
* External Libs: p5.js and WebGL from MDN
*Sets up planet canvas and draws 3D planet model with other attributes like background, color, etc.
*/
var earth;

function preload() {
    earth = loadImage('img/venusmap.jpg');
}

function setup() {
    createCanvas(500, 500, WEBGL);
}
function draw() {
    background(0);
    //ambientLight(0,0,255);
    texture(earth);
    //ambientMaterial(255);
    box(200, 200, 200);
}