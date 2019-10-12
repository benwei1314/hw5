function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 0; i <= 200; i = i + 10) {  //can only do a pyramid
    line(200 + i, i, 200 - i, i);
    
    
  }
}
