var img;
function preload() {
 img = loadImage("data/snowflake.png");
}



function setup() {
createCanvas(windowWidth, windowHeight);
background (222, 235, 255);
frameRate(20)
}


function draw() {

  
 fill(196,196,196,255)
 noStroke();
 circle(width/2, height/2 + 110, 300);
 
 fill(67,67,67)
circle(width/2, height/2 - 100, 200)

fill (222,222,222,255)
noStroke();
ellipse(width/2, height/2-49, 210, 110)
ellipse(width/2-50, height/2-80, 90, 100)
ellipse(width/2+50, height/2-80, 90, 100)

 fill(67,67,67)
rect(width/2-12, height/2-120, 25, 60)
ellipse(width/2, height/2-60, 50, 30)
 
 fill (220,188,140)
 arc(width/2-50, height/2+250, 60, 50, 15, PI/5, CHORD);
 arc(width/2+50, height/2+250, 60, 50, 15, PI/5, CHORD);
 triangle (width/2-5, height/2-65, width/2+7, height/2-65, width/2 + 1, height/2-55); 

 image(img, mouseX - 50 , mouseY - 50, 150, 150/img.width*img.height);
 
  

 
  irisMove();
}

function irisMove() {
  let x = map(mouseX, 0, width, 0, 10);
  let y = map(mouseY, 0, height, 0, 10);
   fill(0,0,0)
 ellipse(width/2 - 50 + x , height / 2 - 90 + y, 20, 25)
 ellipse(width/2 + 50 + x, height/2 - 90 + y, 20, 25)
 fill(255,255,255)
 noStroke();
 circle(width/2 - 52 + x, height/2 - 96 + y,8)
 circle(width/2- 55 + x, height/2 - 90 + y,4)
 circle(width/2+ 52 + x, height/2 - 96 + y,8)
 circle(width/2+ 55 + x, height/2 - 90 + y,4)
 
}
