const ballWidth = 100;
const ballHeight = 100;
const ballRadius =  ballWidth / 2;

let xPos = 100;
let xSpeed = 2;

let yPos = 100;
let ySpeed = 4;

let r = 200;
let g = 200;
let b = 200;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function changeColor() {
    r = random(255);
    g = random(255);
    b = random(255);
}

function draw() {
    background(100);
    fill(r, g, b);
    noStroke();
    ellipse(xPos, yPos, ballWidth, ballHeight);

    if (xPos > (width - ballRadius)) {
        xSpeed = random(-5);
        changeColor();
    }

    if (xPos < ballRadius) {
        xSpeed = random(5);
        changeColor();
    }

    if (yPos > (height - ballRadius)) {
        ySpeed = random(-5);
        changeColor();
    }

    if (yPos < ballRadius) {
        ySpeed = random(5);
        changeColor();
    }

    xPos = xPos + xSpeed;
    yPos = yPos +ySpeed;
}
