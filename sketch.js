function preload(){
  // put preload code here
}

var mic;
var analyzer;
var capture;

function setup() {
  // put setup code here
  background(40);
  createCanvas(windowWidth,windowHeight);
  capture = createCapture(VIDEO);
	capture.size(windowWidth, windowHeight);
	capture.hide();

  mic = new p5.AudioIn();
  analyzer = new p5.Amplitude();
  analyzer.setInput(mic);

  mic.start();

}

function draw() {
  // put drawing code here


 var thisX = random(0,width);
 var thisY = random(0,height)
 var col = get(thisX, thisY);
 fill(col);

    var myImage = capture.loadPixels();

	image(myImage, windowWidth/2, windowHeight/2, 640*2, 480*2);
  imageMode(CENTER);
  var vol = mic.getLevel();
  var boh = analyzer.getLevel();
  noStroke();
  fill(col);
  for(var x = 25; x < windowWidth; x += 25) {
    for(var y = 25; y < windowHeight; y += 25) {

      noStroke();
      fill(col);
      if ( vol > 0.02) {
      ellipse(x, y,boh * 500);} else {
        rectMode(CENTER);
        rect(x,y,boh * 500,boh * 500);
      }
    }
  }
}
