'use strict';

let newGameBtn = document.getElementsByClassName('btn--new')[0];
let rollBtn = document.getElementsByClassName('btn--roll')[0];
let boldBtn = document.getElementsByClassName('btn--hold')[0];
let dicePic = document.getElementsByClassName('dice')[0];

let rollDice = function () {
  //Generate a number between 1 and 6
  dicePic.src = `dice-${Math.floor(Math.random() * 6 + 1)}.png`;
};

let resetGame = function () {
  console.log('game reset');
};

newGameBtn.addEventListener('click', resetGame);
