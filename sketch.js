

let scoopY = 600; 
let scoopCountV = 600; // -> Adding counter for vanilla (Ypos)
let scoopCountC = 600; // -> Adding counter for chocolate (Ypos)
let scoopCountS = 600; // -> Adding counter for strawberry (Ypos)
let iceCreamY = 600; 
let vanButton,chocButton,strawButton,reSetButton;
let line = 0;
let VL, CH, SW; // -> Image variables
let startAgainElement; // -> Keeping track of text on screen

function preload(){ // -> Preloading images
  VL = loadImage('Images/VL.png');
  CH = loadImage('Images/CH.png');
  SW = loadImage('Images/SW.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  drawButtons();

}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	}

  function icecream(x, y, size, colour){     //starting icecream
  noStroke();
  fill(255, 255, 150);
  triangle(x, y, x + 20, y + 40, x + 40, y);  //Cone
  fill(colour);    
  ellipseMode(CORNER);  //first scooop
  ellipse(x, y - 35, 40, 41);
}

function drawButtons(){
  vanButton = createButton('VANILLA');
  vanButton.position(20, 20);    //vanilla button
  vanButton.size (110,50);
  vanButton.style('font-style', 'italic'); // -> Word style
  vanButton.style('font-weight', 'bold'); // -> Word style
  vanButton.style('background-image', 'url(Images/VL.png)'); // -> Image as background
  vanButton.style('background-size', 'cover'); // -> Cover background with image
  vanButton.style('display', 'flex'); // -> Set display to flex for flexbox properties to work
  vanButton.style('align-items', 'flex-start'); // -> Align content to top
  vanButton.style('padding-top', '4px'); // -> Adjust padding to move text further from the top  
  vanButton.mousePressed(addVanScoop);

  chocButton = createButton('CHOCOLATE');
  chocButton.position(vanButton.x , vanButton.y + 60);   //chocolate button
  chocButton.size (110,50);
  chocButton.style('font-style', 'italic'); // -> Word style
  chocButton.style('font-weight', 'bold'); // -> Word style
  chocButton.style('background-image', 'url(Images/CH.png)'); // -> Image as background
  chocButton.style('background-size', 'cover'); // -> Cover background with image
  chocButton.style('display', 'flex'); // -> Set display to flex for flexbox properties to work
  chocButton.style('align-items', 'flex-start'); // -> Align content to top
  chocButton.style('padding-top', '4px'); // -> Adjust padding to move text further from the top  
  chocButton.mousePressed(addChocScoop);

  strawButton = createButton('STRAWBERRY');
  strawButton.position(vanButton.x , vanButton.y + 120); //strawberry button
  strawButton.size (110,50);
  strawButton.style('font-style', 'italic'); // -> Word style
  strawButton.style('font-weight', 'bold'); // -> Word style
  strawButton.style('background-image', 'url(Images/SW.png)'); // -> Image as background
  strawButton.style('background-size', 'cover'); // -> Cover background with image
  strawButton.style('display', 'flex'); // -> Set display to flex for flexbox properties to work
  strawButton.style('align-items', 'flex-start'); // -> Align content to top
  strawButton.style('padding-top', '4px'); // -> Adjust padding to move text further from the top  
  strawButton.mousePressed(addStrawScoop);

  reSetButton = createButton('NEW ICECREAM');
  reSetButton.position(vanButton.x , vanButton.y + 190);  //strawberry button
  reSetButton.size (110,50);
  reSetButton.style('font-style', 'italic');
  reSetButton.style('font-weight', 'bold');
  reSetButton.mousePressed(resetIcecream);
}


function addVanScoop() {  // vanilla scoop
 
  scoopY -= 37;
  fill(245, 242, 235);
  ellipseMode(CORNER);
  ellipse(width/2, scoopY - 30, 40, 41);
  ellipse(width/3, scoopCountV -= 37, 40, 41); // -> Add vannilla count
 
}

function addChocScoop() {   //chocolate scoop
 
  scoopY -= 37;
  fill(89, 52, 38);
  ellipseMode(CORNER);
  ellipse(width/2, scoopY - 30, 40, 41);
  ellipse(width/3 - 60, scoopCountC -= 37, 40, 41); // -> Add chocolate count
  
}
function addStrawScoop() {   // strawberry scoop
 
  scoopY -= 37;
  fill(232, 172, 209);
  ellipseMode(CORNER);
  ellipse(width/2, scoopY - 30, 40, 41);
  ellipse(width/3 - 120, scoopCountS -= 37, 40, 41); // -> Add strawberry count
 
}



function draw(){
 
  icecream(width/2, iceCreamY, 30, color(245, 242, 235)); //starting cone

  if (scoopY < 40) {   
    GameOver() ;  
    hideButtons();  //hides buttons
    startAgain();
    
  
  }
}
 

function GameOver(){ // makes coloured lines down the screen when icecream gets too high

  noStroke();

  fill(245, 242, 235);
  rect(0,0,width/3,line);
  
  fill(89, 52, 35);
  rect(width/3, 0, width/3,line);

  fill(232, 172, 209);
  rect(width/3 + width/3, 0, width/3,line);

  line += 10;

}

function hideButtons(){  // hides buttons

  vanButton.hide();
  chocButton.hide();
  strawButton.hide();
  reSetButton.hide();

}

function resetIcecream (){     // resets icecream 
  background(50);
    icecream(width/2, iceCreamY, 30, color(255));
    scoopY = iceCreamY - 5;
    scoopCountV = iceCreamY - 5; // -> Reset scoop counts 
    scoopCountC = iceCreamY - 5; // -> Reset scoop counts 
    scoopCountS = iceCreamY - 5; // -> Reset scoop counts 
    line = 0;
    drawButtons();

}


function startAgain(){  //Start again text

  startAgainElement = createElement('h1','START AGAIN');
  startAgainElement.position(width/3,height/2);
  startAgainElement.style('color', 'black');
  startAgainElement.center();

}






