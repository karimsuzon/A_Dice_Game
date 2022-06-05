var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomDiceImage = "Dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImagesource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img") [1].setAttribute("src", randomImageSource2);

// if player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
// if player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}
// gmae is Draw
else{
  document.querySelector("h1").innerHTML = "Draw";
}

// Math.floor(Math.random() * 6) + 1;
// Math.random() = 0 - 0.99
// Math.random() * 6 = it will generate number between 0 - 0.599
// Math.floor() = it will round the number. whole number not a decimel number.
// changing the number between 1 and 6 by adding number 1 with 5.
