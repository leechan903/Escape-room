var lock = 0;
var flowerValue1 = 1;
var flowerValue2 = 1;
var flowerValue3 = 1;

function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(1400,500);
  canvas = 1;
  flower = 1;
 
}

//picutures for flowers and animals
function preload() 
{
  key = loadImage('https://dl.dropboxusercontent.com/s/5ejv5x26c8d9ybv/key.jpg');
}

//IF function for canvas 
function draw()
{
  if (canvas == 1)
  {
    canvas1();
  }
  else if (canvas == 2)
  {
    canvas2();
  }
}

//IF function for the flowers

//The size and the color of the circle will change if the mouse goes over the circles, and the flowers will appear according to the color of the circles if the user click each circles, providing that the default flower is red
function canvas1()
{
  background(255,255,255);
  paintNavigation();
  
  //circle1
  fill(255,0,0);
  ellipse(150,55,50,50);

  //circle2
  fill(255,127,0);
  ellipse(210,55,50,50);

  //circle3
  fill(255,255,0);
  ellipse(270,55,50,50);

  fill(0,0,0);
  text("A boy is walking down the road with a doctor.\nThe boy is the doctor's son, but the doctor isn't his father.\nWho is that doctor?",100,300);
  
  //when the mouse goes over the circles, they change size and the color to white
  circle1 = sqrt((mouseX - 150)*(mouseX - 150) + (mouseY - 55)*(mouseY - 55))
  if (circle1 <= 22.5)
  {
    fill(255,255,255);
    ellipse(150,55,65,65);
  }

  circle2 = sqrt((mouseX - 210)*(mouseX - 210) + (mouseY - 55)*(mouseY - 55))
  if (circle2 <= 22.5)
  {
    fill(255,255,255);
    ellipse(210,55,65,65);
  }

  circle3 = sqrt((mouseX - 270)*(mouseX - 270) + (mouseY - 55)*(mouseY - 55))
  if (circle3 <= 22.5)
  {
    fill(255,255,255);
    ellipse(270,55,65,65);

  }

  //when the user press the circle, picture of flower appears
  circle1 = sqrt((mouseX - 150)*(mouseX - 150) + (mouseY - 55)*(mouseY - 55))
  if (circle1 <= 22.5 && mouseIsPressed)
  {
    lock = 1;
  }

  circle2 = sqrt((mouseX - 210)*(mouseX - 210) + (mouseY - 55)*(mouseY - 55))
  if (circle2 <= 22.5 && mouseIsPressed)
  {
    lock = 1;
  }

  circle3 = sqrt((mouseX - 270)*(mouseX - 270) + (mouseY - 55)*(mouseY - 55))
  if (circle3 <= 22.5 && mouseIsPressed)
  {
    lock = 1;
  }
  
  fill(0,0,0);
  if (flowerValue1 == 1)
  {
    text("g",150,200);
  }
  else if (flowerValue1 == 2)
  {
    text("f",150,200);
  }
  else if (flowerValue1 == 3)
  {
    text("t",150,200);
  }
  else if (flowerValue1 == 4)
  {
    text("m",150,200);
  }
  else if (flowerValue1 == 5)
  {
    text("j",150,200);
  }
  else if (flowerValue1 == 6)
  {
    text("o",150,200);
  }
  else if (flowerValue1 == 7)
  {
    text("p",150,200);
  }
  else
  {
    text("g",150,200);
  }

  if (flowerValue1 == 8)
  {
    flowerValue1 = 1;
  }

  if (flowerValue2 == 1)
  {
    text("c",210,200);
  }
  else if (flowerValue2 == 2)
  {
    text("e",210,200);
  }
  else if (flowerValue2 == 3)
  {
    text("t",210,200);
  }
  else if (flowerValue2 == 4)
  {
    text("p",210,200);
  }
  else if (flowerValue2 == 5)
  {
    text("o",210,200);
  }
  else if (flowerValue2 == 6)
  {
    text("n",210,200);
  }
  else if (flowerValue2 == 7)
  {
    text("p",210,200);
  }
  else
  {
    text("c",210,200);
  }

  if (flowerValue2 == 8)
  {
    flowerValue2 = 1;
  }

  if (flowerValue3 == 1)
  {
    text("f",270,200);
  }
  else if (flowerValue3 == 2)
  {
    text("p",270,200);
  }
  else if (flowerValue3 == 3)
  {
    text("b",270,200);
  }
  else if (flowerValue3 == 4)
  {
    text("w",270,200);
  }
  else if (flowerValue3 == 5)
  {
    text("m",270,200);
  }
  else if (flowerValue3 == 6)
  {
    text("s",270,200);
  }
  else if (flowerValue3 == 7)
  {
    text("l",270,200);
  }
  else
  {
    text("f",270,200);
  }

  if (flowerValue3 == 8)
  {
    flowerValue3 = 1;
  }

  if (flowerValue1 == 4 && flowerValue2 == 5 && flowerValue3 == 5)
  {
    canvas = 2;
  }
}


//when the user clicks each canvas, different functions appear except for Canvas 4
function paintNavigation()
{
  //canvas 1
  fill(255,0,0);
  rect(10,10,90,90);
  fill(0,0,0);
  text("Puzzle 1",30,50);
  if (mouseX > 10 && mouseX < 100 && mouseY > 10 && mouseY < 100 && mouseIsPressed == true)
  {
    canvas = 1;
  }
}

function canvas2()
{
  background(255,255,255);
  fill(0,0,0);
  
  text("You got this key.", 210,260);
  image(key,100,100,80,80);

}

function mouseReleased()
{
  if (circle1 <= 22.5 && lock == 1)
  {
    lock = 0;
    flowerValue1 = flowerValue1 + 1;
  }
  else if (circle2 <= 22.5 && lock == 1)
  {
    lock = 0; 
    flowerValue2 = flowerValue2 + 1;
  }
  else if (circle3 <= 22.5 && lock == 1)
  {
    lock = 0; 
    flowerValue3 = flowerValue3 + 1;
  }

}
