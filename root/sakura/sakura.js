// sketch inspired by natalieyeye's SAKURA BLOSSOM
var organics = [];
var change, colorsPalette;


function setup() {
  createCanvas(windowWidth, windowHeight);
  change = 0;
  colorsPalette = [color(120, 162, 204,10),
            color(136, 174, 208,30),
            color(150, 185, 208,10),
            color(164, 195, 210,30),
            color(174, 203, 214,30),
            color(191, 212, 219,10),
            color(103, 119, 184,30),
             color(178,230,255,30),
            color(255,216,238,10),];

  for (var i=0;i<110;i++){
    organics.push(new Organic(5+0.1*i,width/2,height/2,i*1,i*random(270),colorsPalette[floor(random(8) + mouseX)]));
  }

}

function draw() {
  background (222, 235, 255);
  for(var i=0; i<organics.length;i++){
      organics[i].show(change);
  }

  change+=0.01;

}

function Organic(radius,xpos,ypos,roughness,angle,color){

  this.radius = radius; //radius of blob
  this.xpos = xpos; //x position of blob
  this.ypos = ypos; // y position of blob
  this.roughness = roughness; // magnitude of how much the circle is distorted
  this.angle = angle; //how much to rotate the circle by
  this.color = color; // color of the blob
  this.show = function(change){

    noStroke(); // no stroke for the circle
    fill(this.color); //color to fill the blob

    push(); //we enclose things between push and pop so that all transformations within only affect items within
    translate(xpos, ypos); //move to xpos, ypos
    rotate(this.angle+change); //rotate by this.angle+change
    beginShape(); //begin a shape based on the vertex points below
    //The lines below create our vertex points
    var off = 0;
    for (var i = 0; i < TWO_PI; i += 0.1) {
      var offset = map(noise(off, change), 0, 1, -this.roughness + mouseX, this.roughness + mouseY);
      var r = this.radius + offset;
      var x = r * cos(i);
      var y = r * sin(i);
      vertex(x, y);
      off += 0.1;
    }
    endShape(); //end and create the shape
    pop();

    }
}
