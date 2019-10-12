function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  noFill()
  for (var i = 10; i <= 390; i = i + 10) {
    var startX = 10;
    var startY = i;
    var endX = 390;
    var endY = i;
    ellipse(200, 200, i);
  }
}
