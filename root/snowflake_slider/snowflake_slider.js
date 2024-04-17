// sketch inspired by rotate circle by Josh Miller from https://editor.p5js.org/joshmiller/sketches/PzcngcgJv
let slider;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); 
  
  // slider stuff
  slider = createSlider(1, 100, 8);
  slider.position(width/2 - 60, 10);
  slider.style('width', 'width');
}

function draw() {
  background (222, 235, 255);
  fill("white");
  noStroke();

  translate(width / 2, height / 2);
  for (var i = 0; i < slider.value(); i++) {
    push();
    rotate(360 / slider.value() * i); 

    if (i%2==0) rect(-5, 50, 10, 200); 
    else     rect(-5, 50, 10, 100);
    
     if (i%4==0) rect(-5, 50, 10, 200); 
    else     rect(-5, 50, 10, 100);
    
    fill (178,230,255)
      if (i%2==0) circle(0, 250, 50); 
    else     circle(0, 150, 20);
    
  
   
    
    
    pop();
  }
}
