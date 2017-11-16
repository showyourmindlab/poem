var poem = 'We don\'t read and write poetry because it\'s cute. We read and write poetry because we are members of the human race. And the human race is filled with passion. And medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for';
var poemArray = poem.split(' ');
var bgm;
var amplitude;
var x, y, i;
var hueVal=0;
var sum=0;
var prevT=0;

function preload() {
  bgm = loadSound('bgm.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360,100,100);
  bgm.loop();
  amplitude = new p5.Amplitude();

  textFont('sans-serif');
  x= width/2, y= height/2;
  i=0;
  fill(255);
}

function draw() {
  //background(0,0,0);
      fill(0, 0.02);
    rect(0,0, width, height);
  var level = amplitude.getLevel();

  var curT = millis();
  //if ( (curT-prevT) > 500) {
  if (level>0.1 && (curT-prevT) > 500) {

    //background(hueVal, 20, 50);
    var size = map(level, 0, 1, 20, 700);
    fill(255);
    textSize(size);
    text(poemArray[i], x, y);
    i++;
    if (i==poemArray.length) noLoop();
    x= random(width*0.1, width*0.5);
    y= random(height*0.3, height*0.7);
    prevT = curT;
    hueVal+=10;
    if (hueVal>=360) hueVal =0;
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
