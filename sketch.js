var myData;
var myData2;
var myData3;
var myImage1;
var myImage2;
var myImage3;
var myImage4;
var myImage5;
var myImage6;
var myImage7s;
var mySong;
var balls = [];
var textCol = '#0D1B2A';

function preload() {
  // put preload code here
  myData = loadJSON('./assets/pets-data.json');
  myData2 = loadJSON('./assets/petOfTheDay.json');
  myData3 = loadJSON('./assets/pets-data2.json');

  myImage3 = loadImage('./assets/images/gecko.png');
  myImage2 = loadImage('./assets/images/cat-1.png');
  myImage1 = loadImage('./assets/images/dog-1.png');
  myImage4 = loadImage('./assets/images/dog-2.png');
  myImage5 = loadImage('./assets/images/python.png');
  myImage6 = loadImage('./assets/images/rabbit.png');
  myImage7 = loadImage('./assets/images/goldfish.png');

  mySong = loadSound('./assets/victorySong.mp3')
}

function setup() {
  // put setup code here
  noStroke();
  createCanvas(windowWidth, windowHeight);
  background('lightgreen');
  textFont('Poppins');
}

function draw() {
  // put drawing code here
  page01();
  scritta('#FFFF8F');

  if (mouseIsPressed == true && mouseButton == RIGHT) {
    page2();
    scritta('#FFFF8F');
  } else if(mouseIsPressed == true && mouseButton == LEFT){
    page01();
    scritta('#FFFF8F');
  }

  if (mouseX > rx && mouseX < (rx + rw) && mouseY > ry && mouseY < (ry + rh)) {
    pageVictory();
    scritta('#45D9D9');
    if(mySong.isPlaying() == false){
      mySong.loop();
    }
  } else {
    if(mySong.isPlaying() == true){
      mySong.pause();
    }
  }

  textAlign(CENTER);
  textStyle(NORMAL);
  fill(textCol);
  text("Click right and left button to meet new friends",width -170,height-20);
  textAlign(LEFT);
}

function page01() {

  var newBall1 = new Ball(windowWidth / 2, windowHeight / 2 -80, 200, myImage1, 2);
  balls.push(newBall1);

  var newBall0 = new Ball(windowWidth / 2 - 300, windowHeight / 2 -80, 200, myImage2, 2);
  balls.push(newBall0);

  var newBall2 = new Ball(windowWidth / 2 + 300, windowHeight / 2 -80, 200, myImage3, 2);
  balls.push(newBall2);

  background('#45D9D9');

  for (var j = 0; j < balls.length; j++) {
    balls[j].display();
  }

  var x1 = width / 2;
  var y1 = height / 2-80;
  var radius = 100;
  textSize(15);

  var name1 = myData.pets[1];
  var name1_l = name1.name;

  var species1 = myData.pets[1];
  var species1_l = species1.species;

  var birthYear1 = myData.pets[1];
  var birthYear1_l = birthYear1.birthYear;

  var favFoods1 = myData.pets[1];
  var favFoods1_l = favFoods1.favFoods;


  var d = dist(x1, y1, mouseX, mouseY);

  if (d < radius) {
    fill(textCol);
    textAlign(CENTER);
    textStyle(NORMAL);
    text(name1_l, x1 , y1 + 155);
    text(species1_l, x1 , y1 + 205);
    text(birthYear1_l, x1 , y1 + 255);
    text(favFoods1_l, x1, y1 + 305);
    textStyle(BOLD);
    text('Name : ', x1 , y1 + 135);
    text('Species : ', x1 , y1 + 185);
    text('Birthday :', x1 , y1 + 235);
    text('Fav Food : ', x1 , y1 + 285);


    fill(255, 255, 255, 1);
  } else if (d > radius) {
    noFill();
  }

  ellipse(x1, y1, radius * 2);


  var x2 = width / 2 + 300;
  var y2 = height / 2-80;

  var name2 = myData.pets[2];
  var name2_l = name2.name;

  var species2 = myData.pets[2];
  var species2_l = species2.species;

  var birthYear2 = myData.pets[2];
  var birthYear2_l = birthYear2.birthYear;

  var favFoods2 = myData.pets[2];
  var favFoods2_l = favFoods2.favFoods;


  var d = dist(x2, y2, mouseX, mouseY);

  if (d < radius) {
    fill(textCol);
    textAlign(CENTER);
    textStyle(NORMAL);
    text(name2_l, x2 , y2 + 155);
    text(species2_l, x2 , y2 + 205);
    text(birthYear2_l, x2 , y2 + 255);
    text(favFoods2_l, x2, y2 + 305);
    textStyle(BOLD);
    text('Name : ', x2 , y2 + 135);
    text('Species : ', x2 , y2 + 185);
    text('Birthday :', x2 , y2 + 235);
    text('Fav Food : ', x2 , y2 + 285);
    fill(255, 255, 255, 1);

  } else {
    noFill();
  }

  ellipse(x2, y2, radius * 2);

  var x0 = width / 2 - 300;
  var y0 = height / 2 - 80;

  var name0 = myData.pets[0];
  var name0_l = name0.name;

  var species0 = myData.pets[0];
  var species0_l = species0.species;

  var birthYear0 = myData.pets[0];
  var birthYear0_l = birthYear0.birthYear;

  var favFoods0 = myData.pets[0];
  var favFoods0_l = favFoods0.favFoods;


  var d = dist(x0, y0, mouseX, mouseY);

  if (d < radius) {

    fill(textCol);
    textAlign(CENTER);
    textStyle(NORMAL);
    text(name0_l, x0 , y0 + 155);
    text(species0_l, x0 , y0 + 205);
    text(birthYear0_l, x0 , y0 + 255);
    text(favFoods0_l, x0, y0 + 305);
    textStyle(BOLD);
    text('Name : ', x0 , y0 + 135);
    text('Species : ', x0 , y0 + 185);
    text('Birthday :', x0 , y0 + 235);
    text('Fav Food : ', x0 , y0 + 285);
    fill(255, 255, 255,1);
  } else {
    noFill();

  }

  ellipse(x0, y0, radius * 2);
}

function page2() {

  var newBall3 = new Ball(windowWidth / 2, windowHeight / 2 -80, 200, myImage5, );
  balls.push(newBall3);

  var newBall4 = new Ball(windowWidth / 2 - 300, windowHeight / 2 -80, 200, myImage7, );
  balls.push(newBall4);

  var newBall5 = new Ball(windowWidth / 2 + 300, windowHeight / 2 -80, 200, myImage6, );
  balls.push(newBall5);

  background('#45D9D9');
  textSize(15);
  textAlign(CENTER);

  for (var j = 0; j < balls.length; j++) {
    balls[j].display();
  }

  var x1 = width / 2;
  var y1 = height / 2 -80;
  var radius = 100;

  var name1 = myData3.pets[1];
  var name1_l = name1.name;

  var species1 = myData3.pets[1];
  var species1_l = species1.species;

  var birthYear1 = myData3.pets[1];
  var birthYear1_l = birthYear1.birthYear;

  var favFoods1 = myData3.pets[1];
  var favFoods1_l = favFoods1.favFoods;


  var d = dist(x1, y1, mouseX, mouseY);

  if (d < radius) {
    fill(textCol);
    textStyle(NORMAL);
    text(name1_l, x1 , y1 + 155);
    text(species1_l, x1 , y1 + 205);
    text(birthYear1_l, x1 , y1 + 255);
    text(favFoods1_l, x1, y1 + 305);
    textStyle(BOLD);
    text('Name : ', x1 , y1 + 135);
    text('Species : ', x1 , y1 + 185);
    text('Birthday :', x1 , y1 + 235);
    text('Fav Food : ', x1 , y1 + 285);

    fill(255, 255, 255, 1);
  } else if (d > radius) {
    noFill();
  }
  ellipse(x1, y1, radius * 2);


  var x2 = width / 2 + 300;
  var y2 = height / 2 -80;

  var name2 = myData3.pets[2];
  var name2_l = name2.name;

  var species2 = myData3.pets[2];
  var species2_l = species2.species;

  var birthYear2 = myData3.pets[2];
  var birthYear2_l = birthYear2.birthYear;

  var favFoods2 = myData3.pets[2];
  var favFoods2_l = favFoods2.favFoods;


  var d = dist(x2, y2, mouseX, mouseY);

  if (d < radius) {
    fill(textCol);
    textStyle(NORMAL);
    text(name2_l, x2 , y2 + 155);
    text(species2_l, x2 , y2 + 205);
    text(birthYear2_l, x2 , y2 + 255);
    text(favFoods2_l, x2, y2 + 305);
    textStyle(BOLD);
    text('Name : ', x2 , y2 + 135);
    text('Species : ', x2 , y2 + 185);
    text('Birthday :', x2 , y2 + 235);
    text('Fav Food : ', x2 , y2 + 285);
    fill(255, 255, 255, 1);

  } else {
    noFill();
  }
  ellipse(x2, y2, radius * 2);

  var x0 = width / 2 - 300;
  var y0 = height / 2 -80;

  var name0 = myData3.pets[0];
  var name0_l = name0.name;

  var species0 = myData3.pets[0];
  var species0_l = species0.species;

  var birthYear0 = myData3.pets[0];
  var birthYear0_l = birthYear0.birthYear;

  var favFoods0 = myData3.pets[0];
  var favFoods0_l = favFoods0.favFoods;


  var d = dist(x0, y0, mouseX, mouseY);

  if (d < radius) {

    fill(textCol);
    textStyle(NORMAL);
    text(name0_l, x0 , y0 + 155);
    text(species0_l, x0 , y0 + 205);
    text(birthYear0_l, x0 , y0 + 255);
    text(favFoods0_l, x0, y0 + 305);
    textStyle(BOLD);
    text('Name : ', x0 , y0 + 135);
    text('Species : ', x0 , y0 + 185);
    text('Birthday :', x0 , y0 + 235);
    text('Fav Food : ', x0 , y0 + 285);
    fill(255, 255, 255, 1);
  } else {
    noFill();

  }
  ellipse(x0, y0, radius * 2);
}

function pageVictory() {
  background('#FFFF8F');
  push();
  imageMode(CENTER);
  translate(width / 2, height / 2);
  rotate(frameCount / 100);
  image(myImage4, 0, 0, 400, 400);
  pop();

  var name = myData2.name;
  var species = myData2.species;
  var age = myData2.age;
  fill(textCol);
  textSize(15);
  text('Name =', 40, height / 4 -75);
  text('Species =', 40, height / 4 - 25);
  text('Age =', 40, height / 4 + 25);
  textStyle(NORMAL);
  text(name, 50, height / 4 - 50);
  text(species, 50, height / 4);
  text(age, 50, height / 4 + 50);
}

function Ball(_x, _y, _diameter, img, col, sCol) {
  this.size = _diameter;
  this.x = _x;
  this.y = _y;
  this.img = img;
  this.col = col;
  this.sCol = sCol;

  this.display = function() {
    imageMode(CENTER);
    image(this.img, _x, _y, 200, 200);
    noFill();
    strokeWeight(2);
    stroke('white');
    ellipse(this.x, this.y, this.size);
    fill('white');
    noStroke();
    text(this.label, this.x, this.y);
  }
}

function click1() {
  background('black');
}

var rx = 20;
var ry = 20;
var rw = 190;
var rh = 40;

function scritta(_col){
  this.col = _col;
  fill(_col);
  rect(rx, ry, rw, rh, 5);
  fill(textCol);
  textStyle(BOLD);
  textSize(12);
  textAlign(LEFT);
  text('Discover the pet of the day',30,45);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
