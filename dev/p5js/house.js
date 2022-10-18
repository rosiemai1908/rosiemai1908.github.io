function setup() {
    createCanvas(600,600);
    noLoop();
}

function draw() {
    noStroke();

    // sky
    fill(143, 200, 255);
    rect(0, 0, 800, 600);

    // grass
    fill(0, 255, 100);
    rect(0, 400, 600, 200);

    // wall
    fill(255, 255, 255);
    rect(200, 250, 200, 200);

    //roof
    fill(255, 70, 20);
            //x1   y1   x2   y2   x3   y3
    triangle(150, 250, 300, 100, 450, 250);
}
