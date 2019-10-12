function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (var i = 0; i <= 400; i = i + 30) {
    circle(20 + i, 50, 20, 20);
    circle(20 + i, 100, 20, 20);
    circle(20 + i, 150, 20, 20); //didn't know how to loop it vertically
    circle(20 + i, 200, 20, 20);
    circle(20 + i, 250, 20, 20);
    circle(20 + i, 300, 20, 20);
    circle(20 + i, 350, 20, 20);
  }
}
