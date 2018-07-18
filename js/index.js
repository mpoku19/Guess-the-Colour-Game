
let colours = generateColours(6);

//Collection of variables
let pads = document.querySelectorAll(".pad");
let correctColour = randomColour();
let colourDisplay = document.querySelector("#colourDisplay");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");

easy.addEventListener("click", function() {
  hard.classList.remove("selected");
  easy.classList.add("selected");  
  //generate new set of colours
  colours = generateColours(3);
  //select a new correct colour
  correctColour = randomColour();
  //display correct rgb in header
  colourDisplay.textContent = correctColour.toUpperCase();
  
  //change the first 3 pads and hide the bottom three
  for (i=0; i<pads.length; i++) {
    if(colours[i]) {
      pads[i].style.backgroundColor = colours[i];
    } else {
      pads[i].style.display= "none";
    }
  }
});

hard.addEventListener("click", function() {
  easy.classList.remove("selected");
  hard.classList.add("selected");  
  colours = generateColours(6);
  //select a new correct colour
  correctColour = randomColour();
  //display correct rgb in header
  colourDisplay.textContent = correctColour.toUpperCase();
  
  //change the first 3 pads and hide the bottom three
  for (i=0; i<pads.length; i++) {
    pads[i].style.background = colours[i];
    pads[i].style.display = "block";
  }
});


resetButton.addEventListener("click", function(){
  message.textContent = "";
  //change button display
  resetButton.textContent = "NEW COLOURS"
  //change h1 background back to original
  h1.style.backgroundColor = "transparent"
  //generate new set of colours
  colours = generateColours(6);
  //select a new correct colour
  correctColour = randomColour();
  //display correct rgb in header
  colourDisplay.textContent = correctColour.toUpperCase();
  //run loop for other things
  for (i = 0; i < pads.length; i++) {
  //add colours to pads
  pads[i].style.backgroundColor = colours[i];

  //add event listeners to pads
  pads[i].addEventListener("click", function() {
    let clickedPadColour = this.style.backgroundColor;

    //check if the pad and the correct colour match
    if (clickedPadColour === correctColour) { 
      message.textContent = "YES!";
      padSameColours(clickedPadColour);
      h1.style.backgroundColor = correctColour;
      resetButton.textContent = "PLAY AGAIN?"
    } else {
      this.style.backgroundColor = "transparent";
      message.textContent = "Try Again";
    }
  });
}
  
});


//turn RGB Display to Uppercase
colourDisplay.textContent = correctColour.toUpperCase();

for (i = 0; i < pads.length; i++) {
  //add colours to pads
  pads[i].style.backgroundColor = colours[i];

  //add event listeners to pads
  pads[i].addEventListener("click", function() {
    let clickedPadColour = this.style.backgroundColor;

    //check if the pad and the correct colour match
    if (clickedPadColour === correctColour) {
      message.textContent = "YES!";
      padSameColours(clickedPadColour);
      h1.style.backgroundColor = correctColour;
      resetButton.textContent = "PLAY AGAIN?"
    } else {
      this.style.backgroundColor = "transparent";
      message.textContent = "Try Again";
    } 
  });
}

//Set of functions

function padSameColours(colour) {
  for (i = 0; i < pads.length; i++) {
    pads[i].style.background = colour;
  }
}
//picks a random colour from the colour array
function randomColour() {
  let random = Math.floor(Math.random() * colours.length);
  return colours[random];
}

//generates random colours to create our array
function generateColours(num) {
  let array = [];

  for (i = 0; i < num; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    array.push(`rgb(${r}, ${g}, ${b})`);
  }

  return array;
}