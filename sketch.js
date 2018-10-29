var myData;
var myData2;
var myImage1;
var myImage2;
var myImage3;
var myImage4;
var mySong;


function preload() {
  // put preload code here
  myData = loadJSON('./assets/pets-data.json');
  myData2 = loadJSON('./assets/petOfTheDay.json');
  myImage3 = loadImage('./assets/images/cat-1.png');
  myImage2 = loadImage('./assets/images/cat-2.png');
  myImage1 = loadImage('./assets/images/dog-1.png');
  myImage4 = loadImage('./assets/images/dog-2.png');
  mySong = loadSound('./assets/victorySong.mp3')
}

var balls = [];

function setup() {
  // put setup code here
  noStroke();
  createCanvas(windowWidth, windowHeight);
  background('lightgreen');

  var newBall1 = new Ball(windowWidth / 2, windowHeight / 2, 200, myImage1, );
  balls.push(newBall1);

  var newBall0 = new Ball(windowWidth / 2 - 300, windowHeight / 2, 200, myImage2, );
  balls.push(newBall0);

  var newBall2 = new Ball(windowWidth / 2 + 300, windowHeight / 2, 200, myImage3, );
  balls.push(newBall2);
}



function draw() {
  // put drawing code here
  if (mouseIsPressed == true) {
    background('yellow');
    push();
    imageMode(CENTER);
    translate(width / 2, height / 2);
    rotate(frameCount / 100);
    image(myImage4, 0, 0, 500, 500);
    pop();

    if (mySong.isPlaying() == false) {
      mySong.loop();
    }


    var name = myData2.name;
    var species = myData2.species;
    var age = myData2.age;
    fill('black');
    text('Pet of the day', width / 5 * 4, height / 2 - 80);
    text('Name =', width / 5 * 4, height / 2 - 60);
    text(name, width / 5 * 4, height / 2 - 40);
    text('Species =', width / 5 * 4, height / 2 - 20);
    text(species, width / 5 * 4, height / 2);
    text('Age =', width / 5 * 4, height / 2 + 20);
    text(age, width / 5 * 4, height / 2 + 40);
  } else {
    if (mySong.isPlaying() == true) {
      mySong.pause();
    }
    background('lightgreen');

    for (var j = 0; j < balls.length; j++) {
      balls[j].display();
    }

    var x1 = width / 2;
    var y1 = height / 2;
    var radius = 100;

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
      fill('black');
      textSize(12);
      text(name1_l, x1 + 20, y1 + 120);
      text(species1_l, x1 + 20, y1 + 140);
      text(birthYear1_l, x1 + 20, y1 + 160);
      text(favFoods1_l, x1 + 20, y1 + 180);

      text('Name = ', x1 - 50, y1 + 120);
      text('Species = ', x1 - 50, y1 + 140);
      text('Birth Year =', x1 - 50, y1 + 160);
      text('Fav Food = ', x1 - 50, y1 + 180);

      fill(255, 255, 255, 1);
    } else if (d > radius) {
      noFill();
    }
    ellipse(x1, y1, radius * 2);


    var x2 = width / 2 + 300;
    var y2 = height / 2;

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
      fill('black');
      text(name2_l, x2 + 20, y2 + 120);
      text(species2_l, x2 + 20, y2 + 140);
      text(birthYear2_l, x2 + 20, y2 + 160);
      text(favFoods2_l, x2 + 20, y2 + 180);

      text('Name = ', x2 - 50, y2 + 120);
      text('Species = ', x2 - 50, y2 + 140);
      text('Birth Year =', x2 - 50, y2 + 160);
      text('Fav Food = ', x2 - 50, y2 + 180);
      fill(255, 255, 255, 1);

    } else {
      noFill();
    }
    ellipse(x2, y2, radius * 2);

    var x0 = width / 2 - 300;
    var y0 = height / 2;

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

      fill('black');
      text(name0_l, x0 + 20, y0 + 120);
      text(species0_l, x0 + 20, y0 + 140);
      text(birthYear0_l, x0 + 20, y0 + 160);
      text(favFoods0_l, x0 + 20, y0 + 180);

      text('Name = ', x0 - 50, y0 + 120);
      text('Species = ', x0 - 50, y0 + 140);
      text('Birth Year =', x0 - 50, y0 + 160);
      text('Fav Food = ', x0 - 50, y0 + 180);
      fill(255, 255, 255, 1);
    } else {
      noFill();

    }
    ellipse(x0, y0, radius * 2);
  }
}

function Ball(_x, _y, _diameter, img, col) {
  this.size = _diameter;
  this.x = _x;
  this.y = _y;
  this.img = img;
  this.col = col;

  this.display = function() {
    imageMode(CENTER);
    image(this.img, _x, _y, 200, 200);
    noFill();
    ellipse(this.x, this.y, this.size);
    fill('white');
    text(this.label, this.x, this.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
