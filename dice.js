var player1 = Math.floor(Math.random() * 12) + 1;
var player2 = Math.floor(Math.random() * 12) + 1;

while (player1 === player2) {
  var player1 = Math.floor(Math.random() * 12) + 1;
  var player2 = Math.floor(Math.random() * 12) + 1;
}

var randomImageSource1 = "img/dice" + player1 + ".png";
var randomImageSource2 = "img/dice" + player2 + ".png";


if (player1 > player2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else {
  document.querySelector("h1").textContent = "Player 2 Wins!";
}

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
