var movement;

var headX = 250;
var headY = 200;
var headDirection = movement;

var EyeX = 220;
var EyeY = 190;
var EyeDirection = 3;

var REyeX = 280;
var REyeY = 190;
var REyeDirection = movement;

var leftPupilX = 222;
var leftPupilY = 192;
var LeftPupilDirecton = 2;

var rightPupilX = 282;
var rightPupilY = 192;
var RightpupilDirection = 2;






var size = 22;
var count = 0;
var sizeDirection = 2;




function setup() {
    createCanvas(500,600);
    movement = Math.floor(Math.random() * 10);
  }
  
  function draw() {
    background(51, 246, 255 );
    textSize(22);
    text("Happy Easter!", 10,80);
    fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Michael Wade", 10,120);

     // head
     fill(251, 237, 168);
     circle(headX,headY,175);
     headX+=movement;
     if(headX >= 500 || headX <= 0)
     {
         movement *= -1;
     }

     //right eye
    circle(REyeX, REyeY,40);
    REyeY+=movement;
    if(REyeY >= 600 || REyeY <= 0)
      {
          movement *= -1;
      }
    




      // left eye
      fill(251, 237, 168);
      circle(EyeX,EyeY,40);
      EyeX+=EyeDirection;
      if(EyeX >= 500 || EyeX <= 0)
      {
          EyeDirection *= -1;
      }

    

    //Left pupil
    point(222,192);

    //right
    point(282,192);

    //nose
    triangle(240, 220, 250, 210, 260, 220);

    //mouth
    ellipse(250,240,50,20);


    //body
    line(250, 290, 250, 420);

    //legs
    fill(10, 24, 120);
    rect(225,340,50,90);
    fill(10, 24, 120);

}