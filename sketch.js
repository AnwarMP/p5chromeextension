const { STROKE, LINE_LOOP } = require("./p5");

console.log('js has loaded');

function setup(){
    console.log('setup()')
    let c = createCanvas(windowWidth, windowHeight)
    c.position(0,0);
    clear()
}

function draw(){
    console.log('looping')
    stroke(255)
    strokeWeight(4);
    if(mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}