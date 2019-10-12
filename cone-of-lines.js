  
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 50; i <= 380; i = i + 10) {
    var startX = i;
    var startY =400;
    var endX = 200;
    var endY = 0;
    line(startX, startY, endX, endY);
  }
}
